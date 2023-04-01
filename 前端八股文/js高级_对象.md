# 1. 对象的创建模式
## 1). Object构造函数模式
	var obj = new Object()
	obj.name = 'Tom'
	obj.setName = function(name){this.name=name}
## 2). 对象字面量模式
	var obj = {
		name : 'Tom',
		setName : function(name){this.name = name}
	}
## 3). 工厂函数模式

```js
// 工厂函数: 返回一个需要的数据的函数
  function Person(name, age) {
    return {
      name: name,
      age: age
    }
  }
  var person1 = Person('kobe', 43);
```



## 4). 自定义构造函数模式

```js 
function Person(name, age) {
	this.name = name
	this.age = age
	this.setName = function(name){this.name=name}
}
var person1 = new Person('tom', 12)
```
## 5). 构造函数+原型的组合模式
```js 
function Person(name, age) {
	this.name = name
	this.age = age
}
Person.prototype.setName = function(name){this.name=name}
var person1 = new Person('tom', 12)
```

# 2. 继承模式
## 1). 原型链继承 : 得到方法
```js
  function Person(name, age) {  
    this.name = name;
    this.age = age;
  }
  Person.prototype.showName = function () {
    console.log(this.name);
  }

  // 原型继承： 子类的原型 成为 父类的实例
  // Child.prototype = {constructor: Child}
  Child.prototype = new Person();
  Child.prototype.constructor = Child;     // 要手动加上原型的constructor属性
  // 定义一个child类
  function Child(name, age) {
    this.name = name;
    this.age = age;
  }
  
  var child1 = new Child('xiaoming', 18);
```
## 2). 借用构造函数继承 : 得到属性
```js
function Parent(xxx){this.xxx = xxx}
Parent.prototype.test = function(){}
function Child(xxx,yyy){
  Parent.call(this, xxx) //借用父类型的构造函数 
}
var child = new Child('a', 'b')  //child.xxx为'a', 但child没有test()
```
## 3). 组合继承
```js
function Parent(xxx){this.xxx = xxx}
Parent.prototype.test = function(){}
function Child(xxx,yyy){
  Parent.call(this, xxx) //借用构造函数   this.Parent(xxx)
}
Child.prototype = new Parent() //得到test()
Child.proptotype.constructor = Child
var child = new Child() //child.xxx为'a', 也有test()
```

# 3. 理解
## 1). 定义一个函数背后做了什么?
	创建一个Function的实例对象
	给对象添加prototype属性, 其值为object空对象(原型对象)
	给原型对象添加constructor属性, 指向当前函数对象
## 2). new一个对象背后做了些什么?
	创建一个新的空对象
	给对象设置__proto__, 值为构造函数对象的prototype属性值
	通过对象执行构造函数体(给对象添加属性/方法)
