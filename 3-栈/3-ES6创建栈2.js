//用ES6的限定作用域Symbol实现类
let Stack = (function () {
    let _items = Symbol();
    class Stack {
        constructor() {
            this[_items] = [];
        }
        push(element) {
            this[_items].push(element)
        }
        print() {
            console.log(this[_items])
        }
    }
    return Stack
})()

let stack = new Stack();
stack.push(5);
stack.push(8);
stack.push(10);
let objectSymbols = Object.getOwnPropertySymbols(stack);
console.log(objectSymbols); // [Symbol()]
console.log(objectSymbols[0]); // Symbol()
//下面stack[objectSymbols[0]]将得到数组，破坏了栈的封装性
let items = stack[objectSymbols[0]]
//直接操作数组
items[1] = 100
//打印
stack.print(); //输出 5, 100, 10,栈已被破坏




