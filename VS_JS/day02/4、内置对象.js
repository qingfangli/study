// 1、数学对象Math
console.log(Math.PI);
console.log(Math.ceil(1.9));  //2 向上取整
console.log(Math.floor(1,9));  //1 向下取整
console.log(Math.round(1.4));  //1 四舍五入
console.log(Math.round(-1.5));  //-1

// Math.random()随机函数 返回0-1之间（包括0不包括1）[0,1)
// 取0-10之间的整数
console.log(Math.floor(Math.random() * 11));

let arr = [1,3,4,5,6]
console.log(Math.floor(Math.random() * arr.length));  //数组的索引号

// 所以typeof返回值为“object”的对象（如数组）都包含一个内部属性[[class]]（可以把它看成一个内部的分类，而非传统意义上的面向对象的类）
// 这个属性无法直接访问，一般通过Object.prototype.toString.call()来查看
console.log(Object.prototype.toString.call([1,2]))  //[object Array]
console.log(typeof([1,2]));  //object

var d = void 0 //获取undefined
console.log(d);

