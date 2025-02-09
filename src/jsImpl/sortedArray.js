/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length-1 ;
    while(start<=end){
        var mid = Math.floor((start + end)/2)
        if (nums[mid] == target){
            return mid
        }
        if(nums[start] <= nums[mid]){
            if(nums[mid] <= target || nums[mid]  >= target){
                end = mid-1
            }else{
                start = mid+1
            }

        }else{
            if(nums[mid] <= target || nums[mid]  >= target){
                start = mid+1
            }else{
                end = mid-1
            }
        }
       

    }
    return -1;
};


console.log(search([4,5,6,7,0,1,2],0))