//使用ES6的class定义Stack类
class Stack {
    constructor() {
        this.items = []
    }
    push(element) {
        this.items.push(element)
    }
    //其他方法，省略
}
console.log(new Stack1())
//可以发现items暴露出来了，这不是我们想要的




