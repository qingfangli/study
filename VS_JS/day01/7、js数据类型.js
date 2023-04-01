// 1、number
// js是弱数据类型，正数、负数、小数统称为number型
let a = 11
let b = 11.1
console.log(a,b)

// 2、boolean
let t = true
console.log(t)

// 3、String
// ''\""\``
// 反单引号``中可以放html代码
s = `hhhh`
let age = 18
console.log(s)
// + 数字相加、字符相连
console.log('my name is'+ s + ',' + 'my age is ' + age)
// 模板字符串***********
console.log(`my name is ${s} ,my age is ${age}`) //反引号包裹

// 4、undefined
// 只声明变量、不赋值的情况下，变量默认为undefined
let u 
console.log(u); //undefined
// undeclared:没有在作用域中声明过的变量

// 5、null
let n = null
console.log(n) // null
// 赋值了，内容为空

// 6、object




// 基本数据类型：也称简单类型或值类型，在存储时变量中存储的是值本身，String,number,boolean,undefined,null，存放在栈中
// 引用数据类型：复杂数据类型，在存储时变量存储的仅仅是地址（引用）,对象，数组，函数，存放在堆中
let ob1 = {
    age:18
}
let ob2 = ob1  //把ob1的地址赋值给ob2
ob2.age = 20
console.log(ob1.age);  //20


// typeof检测数据类型
console.log(typeof a); //number

// 类型转换
// 表单默认取字符串类型
/* 隐式转换 
    + 号两边只要有一个是字符串，都会把另外一个转成字符串
    除 + 号外的算术运算符，比如- * / 等都会把数据转成数字类型
*/
console.log(2 + '2',typeof (2+'2'));  //22 string
console.log(2 - '1');  // 1
console.log(+123,typeof +123);  //123 number  +号忽略 
console.log(+'123',typeof +'123');  //123 number  +号转换为数字型

/*显式转换 
*/
let str = '123'
console.log(Number(str));  // 123
console.log(parseInt('12.2px'));  // 12 取数字，只要整数
console.log(parseFloat('12.2px'));  //12.2  取数字，小数
// 数字在字母中间无法取

