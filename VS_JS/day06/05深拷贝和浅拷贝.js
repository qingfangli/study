const obj = {
    uname:'kkk',
    age:18,
    family:{
        name:'hhh'
    }
}

//浅拷贝，引用类型拷贝的是地址，只拷贝最外层
const o = {...obj}  
console.log(o);  //{ uname: 'kkk', age: 18 }

const ob = {}
Object.assign(ob,obj)
console.log(ob);  //{ uname: 'kkk', age: 18 }


// 深拷贝，拷贝的是对象，使用函数递归
// lodash
