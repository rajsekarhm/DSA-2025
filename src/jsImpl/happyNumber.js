/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var track = new Set()
    if(n<=0){
        return false
    }
    function squareSum(nums){
        if(track.has(nums)){
            return false
        }
        track.add(nums)
        if(nums == 1){
            return true
        }
        var result = 0
        var splitted = nums.toString().split('')
        splitted.forEach((e) => {
            result = result + Number(e) * Number(e)
        })     
      return squareSum(Number(result))
    }
    return squareSum(n.toString())
};

console.log(isHappy(19))