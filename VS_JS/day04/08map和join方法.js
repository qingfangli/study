const arr = ['red','bule','green']
// map方法，遍历数组,处理数据，可以返回一个数组
const newArr = arr.map(function(item,i){
    // console.log(i,item);
    return item + '颜色'
})
console.log(newArr);

// join方法，把数组中所有元素转换成一个字符串
console.log(newArr.join(','));