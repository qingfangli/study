// 声明对象
// let ob1 = {
//     属性名:属性,
//     方法名:方法

// }
let ob2 = new Object()


let obj = {
    uname : 'hhh',  //属性
    age : 18,
    address : 'huh',
    'u-j':'45353',

    song:function(){  //方法
        console.log('唱歌');
    }

    
}

console.log(obj.address)  //查
console.log(obj['u-j']);  //查
obj.age += 1  //改
console.log(obj.age);  
obj.email = 23243  //增
console.log(obj.email);  
delete obj.address  // 删
console.log(obj);  

obj.song()  //调用方法

// for in不推荐遍历数组
let arr = [3,4,5,6]
for (let k in arr){
    console.log(k);  //数组的下标 索引号，但是是字符串类型
    console.log(arr[k]);
}

// for in遍历对象
for (let i in obj){
    console.log(i);  //'uname' 'age' 'u-j' 'song' 'email' 
    console.log(obj[i]);
}

