let arr = []
let nums = [2,5,5,11]
let target = 10
for (let i = 0;i<nums.length - 1;i++){
    for (let j = i + 1;j<nums.length;j++){
        if (nums[i] + nums[j] == target){
            arr.push(nums[i],nums[j])
        }
    }
}
console.log(arr)