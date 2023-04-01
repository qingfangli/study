// 创建对象的方式
// 1、利用对象字面量创建
const obj1 = {
    name:'aaa'
}
console.log(obj1);

// 2、利用new Object创建
// const obj1 = new Object()
// obj1.name = 'hhh'
// console.log(obj1);  //{ name: 'hhh' }
const obj2 = new Object({name:'kkk'})
console.log(obj2);


/* 
new实例化的过程：
1、创建新的空的对象
2、构造函数this指向新对象
3、执行构造函数代码，修改this，添加新属性
4、返回新对象
 */

// 3、利用构造函数创建
// 约定构造函数的命名以大写字母开头，只能有'new'操作符来执行
function Pig(name,age,gender) {
    this.name = name,  //对象.属性 = 参数
    this.age = age,
    this.gender = gender
}  //默认返回一个对象
const Peiqi = new Pig('佩奇',18,'男')
console.log(Peiqi);


// 基本包装类型
// js底层完成，把简单数据类型包装成引用数据类型
const str = new String('hhh')
// const str = 'hhh'
// 字符串、数值、布尔等基本类型也有专门的构造函数，称为包装类型
// js中几乎所有数据都可以基于构造函数创建


// 静态方法：只有构造函数Object可以调用的
const d = {uname:'kkk',age:18}
console.log(Object.keys(d),Object.values(d));  //[ 'uname', 'age' ] [ 'kkk', 18 ]
const dd = {}
Object.assign(dd,d)  //拷贝
console.log(dd);
Object.assign(dd,{gender:'女'})
console.log(dd);  //{ uname: 'kkk', age: 18, gender: '女' }

