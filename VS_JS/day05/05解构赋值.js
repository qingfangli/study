// 1、数组解构是 将数组的单元值快速批量赋值给一系列变量的简洁语法
const arr = [1,2,3]
const [a,b,c] = arr
console.log(a,b,c);  // 1 2 3

let x = 11
let y = 22;  //必须要加分号
[y,x] = [x,y]
console.log(x,y);  //22 11


// 2、对象解构 是将对象属性和方法快速批量赋值给一系列变量的简洁语法
// const obj = {
//     uname : 'hhh',
//     age:18
// }
const {uname: username,age} = {uname:'hhh',age:18}
console.log(username,a);


// 3、数组对象解构
const pig = [
    {
        name : 'kkk',
        sex:'男'
    }
]
const [{name,sex}] = pig
console.log(name,sex);