/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += nums[i];
    }
    
    let currentSum = maxSum;
    for (let i = k; i < nums.length; i++) {
        console.log(k)
        currentSum += nums[i] - nums[i - k];
        console.log(currentSum)
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum / k;
};

console.log(findMaxAverage([1,12,-5,-6,50,3],4))