/**
 * @param {number[]} nums
 * @return {number}
 */
var canJump = function(nums) {
    var maxIndex = 0
    for(let i = 0 ;i<nums.length;i++){
        if(i > maxIndex ){
            return false
        }
        maxIndex = Math.max(maxIndex, i + nums[i])
        if (maxIndex >= nums.length - 1)  { 
            return true;
        }
    }
    return false
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var   jump= function(nums) {
    
};

console.log(canJump([3,0,8,2,0,0,1]
))