/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = []
    const sol = []
    const avoidDupl = []
    const n = nums.length
    function backtrack(i) {
        if(i >=n){
            // at end
            if(avoidDupl.includes([...sol].join(""))){
                return;
            }
            avoidDupl.push([...sol].join(""))
            res.push([...sol])
            return
        }
        sol.push(nums[i])
        backtrack(i+1)
        sol.pop()
        backtrack(i+1)
    }
    backtrack(0)
    console.log(avoidDupl)
    return res
};


console.log(subsets([4,4,4,1,4]))


[[4,4,4,1,4],[4,4,4,1],[4,4,4,4],[4,4,4],[4,4,1,4],[4,4,1],[4,4],[4,1,4],[4,1],[4],[1,4],[1],[]]
[[],[1],[1,4],[1,4,4],[1,4,4,4],[1,4,4,4,4],[4],[4,4],[4,4,4],[4,4,4,4]]