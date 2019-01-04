/**
 * 学习 push  pop  unshift  shift 四个基本方法
 */
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//push 尾部插入
numbers.push(11)
numbers.push(12, 13)

//unshift 头部插入
numbers.unshift(-2)
numbers.unshift(-4, -3)

//pop 尾部删除
numbers.pop()

//shift 头部删除
numbers.shift()

console.log(numbers)
/**
 * splice
 * 在任意位置添加或删除元素
 *
 */