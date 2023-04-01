// 箭头函数适用于本来需要匿名函数的地方
const fn = function(){
    console.log(11);
}

// 箭头函数
// 1、基本语法
const fun1 = () => {
    console.log(1);
}
fun1()

// 2、只有一个参数时，可以不写()
// const fun2 = (x) => {
//     console.log(x);
// }
// fun2(2)
const fun2 = x => {
    console.log(x);
}
fun2(2)

// 3、只有一行代码时，可以省略大括号{}
const fun3 = x => console.log(x)
fun3(3)

// 4、只有一行代码时，可以省略return
const fun4 = x => x + x
console.log(fun4(2))

// 5、箭头函数可以直接返回一个对象
const fun5 = (uname) => ({name:uname})
console.log(fun5('小明'))  //{ name: '小明' }

// 利用箭头函数求和
const getSum = (...arr) =>{
    let sum = 0
    for (let i = 0;i < arr.length;i++){
        sum += arr[i]
    }
    return sum
}
const re = getSum(1,2,3)
console.log(re);

// 箭头函数的this
// 以前的this：谁调用这个函数，this就指向谁
// 箭头函数不会创建自己的this，只会从自己的作用域链的上一层沿用this

