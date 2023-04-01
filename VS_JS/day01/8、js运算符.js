let a = 1
a += 1
// console.log(a) // 2
// console.log(a++) // 2
// console.log(++a);  // 4
console.log(a++ + ++a + a);  // 10

console.log(2 == 2);  //true
console.log(2 == '2');  //true  判断值相等
console.log(2 === '2');  //false  全等，判断值、数据类型等都一样

// 逻辑运算符 && || ！
console.log(2 > 3 && 3 > 5);  //false


// 优先级：一元运算符>算数运算符>关系运算符>相等运算符>逻辑运算符（先&&后||）>赋值运算符>逗号运算符

// 三元运算符：条件 ？ 结果1 ： 结果2
let i = 2 > 3 ? 2 : 3
console.log(i);  // 3

switch(i){
    case 3:
        console.log('i=' + i);
        // break
    case 2:
        console.log('i=' + i);
        break
    default:
        console.log(i)
}


// ''、0、undefined、null、false、NaN转换为布尔值全为假，其余为true

