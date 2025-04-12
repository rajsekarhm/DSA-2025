/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    var count = 0
    for(let i=0;i<nums.length;i++){
        var temp = nums[i]
        if(temp == k){
            count++
        }
        for(let j=i+1;j<nums.length;j++){
            temp = temp + nums[j]
            if(temp == k){
                count++
            }
        }
        temp = 0
    } 
    return count
};

console.log(subarraySum([1,2,3],3))