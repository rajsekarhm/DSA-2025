/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
  var sum = 0 ;
  var max = 0;
  const track = []
  var sofarMax= 0
  for(let i=0;i<nums.length;i++){
     sum  = sum + nums[i]
     if(max<sum){
      max = sum
     }
     if(nums[i] > nums[i+1] || i+1 == nums.length ){
     sofarMax = Math.max(sofarMax,max)
     max = 0;
     sum = 0
     }
  }
  return sofarMax
};

maxAscendingSum([100,10,1])