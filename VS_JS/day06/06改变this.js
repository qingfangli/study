
function fn(x,y){
    console.log(this);
    console.log(x,y);
}

const obj = {
    uname:'kkk'
}
// 1、call()
// (1)、调用函数
// (2)、改变this指向obj
// fn.call(obj,1,2)  


// 2、apply()
// (1)、调用函数
// (2)、改变this指向obj
fn.apply(obj,[1,2])  //参数为数组
// 使用场景：求数组最大值
const max = Math.max.apply(Math,[1,2,3,4,5])
console.log(max);


// 3、bind() 不会调用函数，只会改变this指向(常用)
const fun = fn.bind(obj)
// console.log(fun);
fun(1,2)

