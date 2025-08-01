/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {

    var result = []

    function binarySearch(insert){
        const copy = [...result]
        var left = 0
        var right  = copy.length-1
        var pos = -1
        while(left<=right){
            var mid = Math.floor((left+right)/2)

            if (copy[mid] >= insert) {
                pos = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        if(pos != -1){
            copy[pos] =  insert
        }
        return copy
    }

    for(let i =0 ;i< nums.length;i++){
        if(result.length === 0 || result[result.length - 1] < nums[i]){
            result.push(nums[i])
        }else{
            result = [...binarySearch(nums[i])];
        }
    }
    return result.length
};


lengthOfLIS([10,9,2,5,3,7,101,18])




