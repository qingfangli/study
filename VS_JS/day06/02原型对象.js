function Star(uname,age){
    // 1、公共的属性写到 构造函数里
    this.uname = uname
    this.age = age
    // this.sing = function{
    //     console.log('唱歌');
    // }浪费内存
}
// 原型对象prototype，解决内存浪费
// 2、公共的方法写到原型对象上
Star.prototype.sing = function(){
    console.log('唱歌');
}

Star.prototype = {
    // sing:function(){  //无法找到constructor
    //     console.log('唱歌');
    // },
    // dance:function(){
    //     console.log('跳舞');
    // }
    
    constructor:Star,  // 重新指回这个原型对象的 构造函数
    sing:function(){  
        console.log('唱歌');
    },
    dance:function(){
        console.log('跳舞');
    }
}
console.log(Star.prototype);  


// 构造函数和原型对象里的this都指向 实例化的对象

const cc = new Star('cc',18)
const dd = new Star('dd',18)
cc.sing()
dd.sing()
console.log(cc.sing === dd.sing);  //true

// constructor属性：该属性指向该原型对象的构造函数
function Star2(){
}
const ldh = new Star2()
console.log(Star2.prototype);
console.log(Star2.prototype.constructor  === Star2);  //true
