/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, targetS) {
    var result = []
    var temp =[]

    function recursive(index,target,temp){
        if(index == candidates.length){ // to check all possible element in array
            if(target == 0){
                result.push([...temp])
                return 
            }
            return
        }

        if(candidates[index] <= target){
            temp.push(candidates[index])
            recursive(index,target - candidates[index],temp)
            temp.pop()
        }
        recursive(index+1,target,temp)
    }
    recursive(0,targetS,temp)
    console.log(result)
   return result
};


// combinationSum(  [1, 2, 3],3)

// function countNumberOfSubarrays(arr, k) {
//     let result = [];

//     function recursive(start, target, temp) {
//         if (target === 0) {
//             result.push([...temp]);
//             return;
//         }
//         if (start >= arr.length) {
//             return;
//         }

//         // Include current element
//         temp.push(arr[start]);
//         recursive(start + 1, target - arr[start], temp);

//         // Backtrack
//         temp.pop();
//     }

//     // Start from each index and move forward to ensure contiguous subarrays
//     for (let i = 0; i < arr.length; i++) {
//         recursive(i, k, []);
//     }

// }

// // countNumberOfSubarrays([5, 10, 2, -2, -20, 10], -10);


function prefixSumBaseSolution(arr,k){
    let count = 0
    let prefixSum = 0
    let map = new Map()
    map.set(0,1);
    for(let i=0;i<arr.length;i++){
        prefixSum += arr[i]
        if(map.has(prefixSum-k)){
            console.log(prefixSum-k,map.get(prefixSum-k))
            console.log("yes")
            count += map.get(prefixSum-k)
        }
        map.set(prefixSum,(map.get(prefixSum) || 0)+1)
    }
    return count
}

prefixSumBaseSolution([5, 10, 2, -2, -20, 10], -10)