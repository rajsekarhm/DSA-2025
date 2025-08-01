/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    function add(arry){
        var sum = 0  
        arry.forEach(element => {
            sum += element
        });
        return sum
    }
    var target = add(nums) 
    if(target % 2 != 0){
        return false
    }
    target = target / 2
    const dp = Array.from({ length: nums.length }, () => Array(target + 1).fill(undefined));


    function f(inx,target){
        if(target == 0 ){
            return true
        }
        if( dp[inx][target] != undefined){
            return  dp[inx][target]
        }
        if(inx == 0){
            return nums[0] == target
        }
        var op1 = f(inx - 1 , target)
        var op2 = false
        if(target > nums[inx]){
           op2 = f(inx - 1, target - nums[inx])
        }
        dp[inx][target] =  op1 || op2
        return  dp[inx][target] 
    }

    return f(nums.length-1,target)
};

const r = canPartition([100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,99,97])


console.log(r)


