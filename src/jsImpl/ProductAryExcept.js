/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const len = nums.length 
    const prefix = Array(len).fill(1);
    const suffix = Array(len).fill(1);
    const result = Array(len);
    suffix[len] =  1
    for(let i= 1 ;i<len;i++){
        prefix[i] = prefix[i-1]*nums[i-1]
        suffix[len-i-1] =  suffix[len-i] * nums[len - i];
    }

    for(let i =0 ;i<nums.length;i++){
        result[i] = prefix[i] * suffix[i]  
    }

    return result
};

productExceptSelf([1,2,3,4])