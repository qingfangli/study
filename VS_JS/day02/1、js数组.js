let arr1 = [1,2,3]
let arr2 = new Array(1,2,3)
console.log(arr1,arr2)  //[ 1, 2, 3 ] [ 1, 2, 3 ]

// 1、数组增 push(),unshift()
arr1.push(4,5)  //往后添加元素
arr1.unshift(6,7)  //往前添加元素
console.log('arr1:' + arr1);  //arr1:6,7,1,2,3,4,5

// 2、删
arr1.pop() //删除数组最后一个元素
console.log('arr1:' + arr1); //arr1:6,7,1,2,3,4
arr1.shift() //删除第一个元素
console.log('arr1:' + arr1);  //arr1:7,1,2,3,4
arr1.splice(2,1) //arr.splice(起始位置，删除几个元素)
console.log('arr1:' + arr1);  //arr1:7,1,3,4

// 3、改
arr2[0] = 2
console.log('arr2:' + arr2);  //arr2:2,2,3