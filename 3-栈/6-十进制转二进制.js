/**
 * 十进制转化二进制的思路是：一直除以2直至结果为0，依次将余数压入栈中，最后依次弹栈得到二进制结果
 * 比如8，8/2 = 4余0，0压入栈中；4/2 = 2余0，0压入栈中；2/2=1余0，0压入栈中；1/2 =0余1，1压入栈中
 * 次时，从栈底到栈顶，依次是 0 0 0 1；依次弹栈，得到1 0 0 0 ，即为8的二进制表示结果
 */
//定义一个栈类
function Stack() {
    //栈的数据结构依然是数组
    //之所以使用内部变量，而不是使用this.items，是为了隐蔽栈的数组本质，只暴露栈这种数据结构特有的方法
    let items = []

    //压栈
    this.push = function (element) {
        items.push(element)
    }

    //弹栈
    this.pop = function () {
        return items.pop()
    }

    //查找栈顶
    this.peek = function () {
        return items[items.length - 1]
    }

    //检查栈是不是空的
    this.isEmpty = function () {
        return items.length == 0
    }

    //栈的大小
    this.size = function () {
        return items.length
    }
    //清空
    this.clear = function () {
        items = []
    }
    this.print = function () {
        console.log(items)
    }
}

//实现二进制转化
function divideBy2(decNumber) {
    var remStack = new Stack(),
        rem,
        binaryString = '';
    while (decNumber > 0) {
        //得到余数并压栈
        rem = decNumber % 2;
        remStack.push(rem);
        //得到除以结果，继续执行
        decNumber = Math.floor(decNumber / 2);
    }
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}
console.log('8的二进制为：' + divideBy2(8))
console.log('2的二进制为：' + divideBy2(2))
console.log('20的二进制为：' + divideBy2(20))

//转化成任何进制
function baseConverter(decNumber, base) {
    var remStack = new Stack(),
        rem,
        baseString = '',
        digits = '0123456789ABCDEF';
    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }
    return baseString;
}

console.log('1000的八进制为：' + baseConverter(1000, 8));
console.log('1000的二进制为：' + baseConverter(1000, 2));
console.log('1000的十六进制为：' + baseConverter(1000, 16));