/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(nums.length == 1){
        return 0
    }
    var maxInx = 0
    var inx = 0
    var edge  = 0
    for(let i = 0  ;i <nums.length-1;i++){
        maxInx = Math.max(maxInx,i + nums[i])
        if(i == edge){
        inx++
        edge = maxInx
        }
    }
    return inx
};

console.log(jump([2, 3, 1, 1, 4]))