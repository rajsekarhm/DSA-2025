/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length ==0 || nums == null){
        return 0
    }
    if(nums.length == 1){
        return nums[0]
    }
    var prev_prev = nums[0];
    var prev = Math.max(nums[0],nums[1])
    for(let i=2;i<nums.length;i++){
        current = Math.max(prev,prev_prev+nums[i])
        prev_prev = prev
        prev = current
        console.log(prev_prev,prev)
    }
    return prev
};


rob([1,5,3,1])