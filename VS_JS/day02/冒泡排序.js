let arr = [3,4,2,6,5]
// let len = arr.length
// for (let i = 0;i<len-1;i++){
//     for (let j = i+1;j<len;j++){
//         if (arr[i] > arr[j]){
//             let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     }
// }
// console.log(arr)

arr.sort()  // 默认升序排序
console.log(arr);
arr.sort(function (a,b){  // 降序
    return b - a
})
console.log(arr);  
