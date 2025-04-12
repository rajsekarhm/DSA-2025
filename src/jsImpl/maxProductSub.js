var maxProduct = function(nums) {
    if(nums.length == 1){
        return nums[0] 
    }
    var start = 1;
    var end = 1;
    var max = Number.MIN_SAFE_INTEGER;
    for(let i=0;i<nums.length;i++){
        if(start == 0 ){
            start = 1
        }
        if(end == 0 ){
            end = 1
        }
        start = start * nums[i]
        end = end*nums[nums.length-1-i]
        max = Math.max(max,Math.max(start,end))
    }
    return  max 
}


console.log(maxProduct([-2,0,-1]))