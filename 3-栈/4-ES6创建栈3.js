let Stack = (function () {
    //有一种数据类型可以确保属性是私有的，这就是WeakMap
    const items = new WeakMap();
    class Stack {
        constructor() {
            //以this(Stack类自己的引用)为键，把代表栈的数组存入items
            items.set(this, []);
        }
        push(element) {
            // 从WeakMap中取出值，即以this为键从items中取值。
            let s = items.get(this);
            s.push(element);
        }
        pop() {
            let s = items.get(this);
            let r = s.pop();
            return r;
        }
    }
    return Stack
})()
let s1 = new Stack()
console.log(s1)
//以上实现了栈的数据封装

//下面几节将使用栈解决具体问题