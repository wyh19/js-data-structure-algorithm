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
        items.pop()
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

// 使用Stack类，创建实例
let stack = new Stack();
console.log(stack.isEmpty()); //输出为true

stack.push(5);
stack.push(8);

console.log(stack.peek()); //输出8

stack.push(11);
console.log(stack.size()); //输出3 
console.log(stack.isEmpty()); //输出false

stack.push(15); //栈底到栈顶依次为5，8，11，15

stack.pop();
stack.pop(); 
console.log(stack.size()); //输出2 
stack.print(); //输出5, 8