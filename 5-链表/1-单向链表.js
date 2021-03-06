/**
 * 数组的缺点：数据量大时，插入或者移除数据项成本很高
 * 链表的一个好处在于，添加或移除元素的时候不需要移动其他元素
 */

//创建链表
function LinkedList() {
    //Node类表示要加入列表的项
    let Node = function (element) {
        this.element = element
        this.next = null
    }

    //记录链表的长度
    let length = 0
    //第一个节点的引用
    let head = null

    //向列表尾部添加一个新的项
    this.append = function (element) {
        let node = new Node(element)
        let current
        if (head === null) {
            //链表是空的，该项作为第一项
            head = node
        } else {
            //从头开始
            current = head
            //找到最后一项
            while (current.next) {
                current = current.next;
            }
            current.next = node
        }
        length++
    }
    //向列表的特定位置插入一个新的项
    this.insert = function (position, element) {
        if (position > -1 && position < length) {
            let node = new Node(element),
                current = head,
                previous,
                index = 0
            if (position === 0) {
                //如果是头部插入，那么直接更新head
                node.next = current
                head = node
            } else {
                //循环至目标位置，期间不停更新current的上一项和current
                while (index < position) {
                    index++
                    previous = current
                    current = current.next
                }
                //下一项为当前位置的
                node.next = current
                //指定上一项
                previous.next = node
            }
            length++
            return true
        } else {
            return false
        }
    }
    //从列表中移除一项
    this.removeAt = function (position) {
        //越界是否检查
        if (position > -1 && position < length) {
            let current = head,
                previous,
                index = 0
            if (position === 0) {
                //如果是第一项，直接将head变为原来的next
                head = current.next
            } else {
                //循环至目标位置，期间不停更新current的上一项和current
                while (index < position) {
                    //更新上一项，因为current下面会更新
                    previous = current
                    //更新index
                    index++
                    //更新current,保持current与index一致
                    current = current.next
                }
                //将previous与current的下一项链接起来:跳过current，从而移除它
                previous.next = current.next
            }
            length--;
            return current.element;
        } else {
            return null
        }
    }
    //返回元素在列表中的索引。如果列表中没有该元素则返回-1
    this.remove = function (element) {
        let index = this.indexOf(element)
        return this.removeAt(index)
    }
    //从列表的特定位置移除一项
    this.indexOf = function (element) {
        let current = head,
            index = 0;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }
    //如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false
    this.isEmpty = function () {
        return length === 0
    }
    //返回链表包含的元素个数。与数组的length属性类似
    this.size = function () {
        return length
    }
    this.getHead = function () {
        return head
    }
    //由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值。
    this.toString = function () {
        let current = head,
            string = ''
        while (current) {
            string += current.element + (current.next ? '->' : '')
            current = current.next
        }
        return string
    }
    this.print = function () { }
}
//测试
let n = new LinkedList()
n.append(1)
n.append(3)
n.insert(1, 2)
console.log(n.toString())
console.log(n.indexOf(1))