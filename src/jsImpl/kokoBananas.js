/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    var left = 1
    var right = Math.max(...piles)
    while(left<right){
        var mid = Math.floor((left+right)/2)
        var temp = 0
        piles.forEach((ele) => {
            temp  =  temp + Math.ceil(ele/mid)
        })
        if(temp <= h){
            right = mid  
        }else{
            left = mid+1 
        }
    }
    return left
};

console.log(minEatingSpeed([30,11,23,4,20],5))