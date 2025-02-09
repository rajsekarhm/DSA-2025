/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var threeSumClosest = function(nums, target) {
    const ans = []
    nums.sort((a, b) => a - b);
    let closestSum = Infinity;
    console.log(nums)
    // if(nums.every((ele) => ele == 0)){
    //     return 0;
    // }
    // var temp = target
    // const nearestAry = [] 
    // nearestAry.push(temp--)
    // nearestAry.push(temp++)
    // nearestAry.push(++temp)
    // for(let i=0;i<nums.length;i++){
    //     if(nearestAry.includes(Math.abs(nums[i]))){
    //         ans.push(nums[i])
    //     }
    // }
    // var result = 0;
    // ans.forEach((ele) =>  result = result + ele) 
    // return result
};


console.log(threeSumClosest([-1,2,1,-4],1))