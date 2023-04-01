// 动态参数arguments
function getSum(){
    console.log(arguments);  //arguments一个伪数组，只存在于函数中
}
getSum(1,2,3)
getSum(1,2,3,4,5)

// 剩余参数
function getSum2(a,b,...arr){
    console.log(arr);  //arr一个真数组
}
getSum2(1,2,3,4,5,6)  //a = 1,b = 2,arr = [3,4,5,6]

// 展开运算符
// 不会修改原数组，用于求最大值、合并数组等
const arr = [1,2,3,4,5]
console.log(...arr);  //1 2 3 4 5
console.log(Math.max(...arr));  //5

const arr2 = [9,8,7]
const arr3 = [...arr,...arr2]
console.log(arr3);