/**
 * 数组的迭代器
 */

var isEven = function (x) {
    console.log(x)
    return (x % 2 == 0) ? true : false
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

//every,迭代每个元素，直至遇到false
numbers.every(isEven)

//some,迭代每个元素，直至遇到true
numbers.some(isEven)

//forEach,迭代整个数组
numbers.forEach(function(x,i){
    console.log(x,i)
})

//map
var myMap = numbers.map(isEven)
console.log(myMap)

//filter,返回新数组
var evenNumbers = numbers.filter(isEven)
console.log(evenNumbers)

//reduce 
var result = numbers.reduce(function(previous,current,index){
    return previous + current
})
console.log(result)

//for of
for(let n of numbers){
    console.log(n)
}