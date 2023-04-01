// const Person = {
//     eyes:2,
//     head:1
// }
// // 公共的部分放在原型上
// function Woman(){

// }
// // 通过原型继承
// Woman.prototype = Person
// // 指回原来的构造函数
// Woman.prototype.constructor = Woman
// // Woman.prototype.baby = function(){
// //     console.log('baby');
// // }
// const red = new Woman()
// console.log(red.eyes);
// // console.log(red.baby);

function Person(){
    this.eyes = 2
    this.head = 2
}
function Woman(){

}
// 通过原型继承
Woman.prototype = new Person()
Woman.prototype.constructor = Woman
const red = new Woman()

// 原型链
