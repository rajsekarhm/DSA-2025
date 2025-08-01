/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    var prefixHashMap = new Map()
    var prefix = 0 
    prefixHashMap.set(0,1)
    var count = 0
    for(let num of nums){
        prefix += num
        var val = prefix - goal
        if(prefixHashMap.has(val)){
            count += prefixHashMap.get(val)
        }
        prefixHashMap.set(prefix,(prefixHashMap.get(prefix) || 0 )+1)
    }
    // var n = nums.length
    // var left =0 , right = 0
    // var count = 0;
    // var sum = 0
    // while(right<n){
    //     sum +=  nums[right]
    //     if(sum > goal){
    //             sum -= nums[left]
    //             if(sum == goal){
    //                 count++
    //             }

    //             left++
    //         }
    //     if(sum == goal){
    //         count++
    //     }
    //     right++
    // }
    return count
};

 

console.log(numSubarraysWithSum([0,0,0,0,0],0))