/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var prefixMax= []
    var suffixMax = []
    var total=0
    prefixMax[0] = height[0]
    suffixMax[height.length-1] = height[height.length-1]
    for(let i =1;i<height.length;i++){
        prefixMax[i] = Math.max(height[i],prefixMax[i-1])
    }
    for(let i =height.length-2;i>=0;i--){
        suffixMax[i] = Math.max(height[i],suffixMax[i+1])
    }
   
    for(let i=0;i<height.length;i++){
        if(prefixMax[i] > height[i] && suffixMax[i] > height[i]){
            total += Math.min(prefixMax[i],suffixMax[i]) - height[i]
            console.log("yes")
        }
    }
    return total
};

trap([4,2,0,3,2,5])