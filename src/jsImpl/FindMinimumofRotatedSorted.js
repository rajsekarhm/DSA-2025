

var findMin = function(nums) {
    var start =0 ;
    var end = nums.length-1
    var min = nums[0]
    while(start<= end){
        if (nums[start] <= nums[end]) {
            min = Math.min(min, nums[start]);
            break;
        }
        var mid = Math.floor((start+end)/2)
        min = Math.min(min , nums[mid]);
        if (nums[mid] >= nums[start]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }

    }
   return min
};


console.log(findMin([4,5,6,7,1,2]))