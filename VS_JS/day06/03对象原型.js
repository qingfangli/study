// 对象都有一个属性__proto__（只读）指向构造函数的prototype原型对象，所以对象可以使用构造函数prototype原型对象的属性和方法
function Star(){}
const ldh = new Star()
// 对象原型指向原型对象
console.log(ldh.__proto__ === Star.prototype);  //true


