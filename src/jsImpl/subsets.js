/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
   var sol = []
   var res = [];
   function backTrack(n){
    if(n == nums.length){
      sol.push([...res])
      return;
    }
    res.push(nums[n])
    backTrack(n+1)
    res.pop()
    backTrack(n+1)
   }
   backTrack(0)
      return  Array.from(
            new Set(sol.map(JSON.stringify)),
            JSON.parse
          );
};

console.log(subsets([4,4,4,1,4]))


//[[4,4,4,1,4],[4,4,4,1],[4,4,4,4],[4,4,4],[4,4,1,4],[4,4,1],[4,4],[4,1,4],[4,1],[4],[1,4],[1],[]]
//[[],[1],[1,4],[1,4,4],[1,4,4,4],[1,4,4,4,4],[4],[4,4],[4,4,4],[4,4,4,4]]