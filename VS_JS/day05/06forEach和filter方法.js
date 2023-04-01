// forEach方法用于调用数组的每个元素，并将元素传递给回调函数
// 加强版for,只遍历，不反回值
const arr = [1,2,3]
arr.forEach(function(item,index){   //item必写，index可不写 
    console.log(index,item);
})

// filter方法：筛选数组符合条件的元素,返回数组
const newArr = arr.filter(function(item,index){
    return item >= 2
})
// const newArr = arr.filter(item => item >= 20)
console.log(newArr);  //[2,3]


// reduce方法，累积器，返回累计处理的结果，经常用于求和等
// arr.reduce(function(上一次值,当前值){},初始值)
const arr3 = [1,2,3,4,5]
// 1、没有初始值
const sum = arr3.reduce(function(prev,current){
    return prev + current
})
console.log(sum);  //15

// 2、有初始值
const sum2 = arr3.reduce(function(prev,current){
    return prev + current
},10)
console.log(sum2);  //25

// 有对象数组需要初始值