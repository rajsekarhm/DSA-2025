/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    const copyArray = []
    for(let i=1;i<=arr[arr.length-1] + k ;i++){
        if(!(arr.includes(i))){
            copyArray.push(i)
        }
    }
    return copyArray[k]
};


findKthPositive([2,3,4,7,11],5)