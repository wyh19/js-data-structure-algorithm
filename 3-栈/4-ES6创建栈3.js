const items = new WeakMap();
class Stack {
    constructor() {
        items.set(this, []);
    }
    push(element) {
        let s = items.get(this);
        s.push(element);
    }
    pop() {
        let s = items.get(this);
        let r = s.pop();
        return r;
    }
}
let s1 = new Stack()
console.log(s1)