/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a-b)
    console.log(nums)
    const result = []
    for(let i =0 ;i<nums.length;i++){
        if (i > 0 && nums[i] === nums[i - 1]) continue
        var left = i+1
        var right = nums.length-1
        while(left<right){
            var val = nums[i] + nums[left] + nums[right] 
            if(val == 0  ){
                result.push([nums[i],nums[left],nums[right]])
                while(left<right && nums[left] == nums[left+1]){
                    left++
                }
                while(left<right && nums[right] == nums[right-1]){
                    right--
                }
                // default
                left++
                right--
            }else if(val<0){
                // val comes minus
                left++
            }else{
                // default
                right--
            }
        }
    }
    return result
};

console.log(threeSum([2,-3,0,-2,-5,-5,-4,1,2,-2,2,0,2,-4,5,5,-10]))