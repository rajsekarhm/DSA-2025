var search = function(nums, target) {
    var start = 0 ;
    var end = nums.length-1;
    while(start<=end){
        var mid = Math.floor((start+end)/2)
        console.log(mid)
        if(nums[mid] == target){
            return mid
        }

        if(target > nums[mid]){
            start = mid+1
        }

        if(target < nums[mid]){
            end = mid - 1
        }

    }
    return -1 
};

console.log(search([-1,0,3,5,9,12],9))