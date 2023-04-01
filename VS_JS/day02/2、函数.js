// 函数命名尽量小驼峰
// 具名函数：可以写在任意地方
function add(a = 0,b = 0){
    return (a + b)
}
let num = add(1,2)
let num2 = add()  //实参没有赋值，使用形参的默认值
console.log(num,num2)  // 3 0

// js中实参和形参的个数可以不同
// 局部变量或块级变量，没有用let声明直接赋值的当全局变量（不推荐）
// 变量访问原则：就近原则


// 匿名函数：防止变量污染
// 1、函数表达式：必须先声明，再调用
let f1 = function(){
    console.log('函数表达式');
}
f1();

// 2、立即执行函数：必须加分号结束
(function(){
    console.log('立即执行函数第一种写法')
})();

(function getAdd(a,b){
    console.log(a+b)
})(1,2);


(function(){
    console.log('立即执行函数第二种写法')
}());
