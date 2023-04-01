const arr = [1, 2, 3]
console.log(arr.length)
// 数组常用方法
// 1、find 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
const f = arr.find(function(item){
    return item === 2
})
console.log(f);
// 2、filter

// 3、every、some

// 4、join