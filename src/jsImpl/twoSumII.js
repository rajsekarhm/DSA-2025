/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const result = []
    var inx1 = -1
    var inx2 = -1
    var left = 0
    var right =  numbers.length-1
    while(left < right){
        inx1 =  left
        inx2 = right
        var temp =  numbers[left] + numbers[right]
        console.log(temp)
        if(temp == target){
            result.push(inx1+1)
            result.push(inx2+1)
            return result
        }
        if(temp < target){
            left++
            continue
        }
         right--
    }
    
};

console.log(
twoSum([2,3,4],6))