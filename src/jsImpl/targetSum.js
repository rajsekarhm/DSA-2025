/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, tar) {
    var count = 0

    function f(inx,target){
        if(inx === nums.length){
            if(target == tar){
                count++;
                return
            }
            return
        }
        let t =  nums[inx]
        f(inx+1,target +t)
        f(inx+1,target-t)
    }  
    f(0,0)
    return count
};

findTargetSumWays([1,1,1,1,1]
    ,3)