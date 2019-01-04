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
 */
//删除索引5开始的3个元素
numbers.splice(5,3)
console.log(numbers)
//添加 索引5开始插入3个元素
numbers.splice(5,0,2,3,4)
console.log(numbers)

/**
 * concat 连接数组,返回合并后的新数组
 */
var zero = 0
var positiveNumbers = [1,2,3]
var negativeNumbers = [-3,-2,-1]

var numbers = negativeNumbers.concat(zero,positiveNumbers)
console.log(numbers)
