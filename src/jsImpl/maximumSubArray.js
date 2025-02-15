/**
 * @param {number[]} nums
 * @return {number}
 */
 // brute force
//var maxSubArray = function(nums) {
//    var largest = -100
//    var start = 0
//    var end = 0
//    if(nums.length == 1) {
//        return nums[0]
//    }
//    for(let i =0 ;i<nums.length;i++){
//      var sum = nums[i]
//      start= i
//      for(let j=i+1;j<nums.length;j++){
//        sum = sum+ nums[j]
//        if(largest<sum){
//          end = j
//          largest = Math.max(largest,sum)
//          console.log({i,j,largest})
//        }
//      }
//       sum = 0
//    }
//   return largest
//};


var maxSubArray = function(nums){
 var start =0 ;
 var end = 0;
 var tempStart =0 ;
 var max = Number.MIN_SAFE_INTEGER
 var sum = 0
 for(let i=0;i<nums.length;i++){
    sum = sum + nums[i];
//    if(sum ==0){
//        tempStart=i
//    }
    if(max < sum){
        start = tempStart
        end = i
        max = sum
    }
    if(sum<0){
        sum = 0
        tempStart = i + 1;
    }
 }
 return nums.slice(start,end+1)
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

