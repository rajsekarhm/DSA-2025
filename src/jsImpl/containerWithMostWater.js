/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max= 0 
    var left = 0
    var right = height.length-1
    while(left<right){
        var width =  right-left
        const min =  Math.min(height[left],height[right])
        const area = width * min
       if(area>max){
        max = area
       }
        if(height[left] < height[right]) {
            left++
        }else{
            right--;
        }
    }
    return max;
};  

console.log(maxArea([1,8,6,2,5,4,8,3,7]))



















// function permuteUnique(nums) {
//     const resultList = [];
//     nums.sort((a, b) => a - b); // Sort the array to handle duplicates
//     backtrack(resultList, [], nums, new Array(nums.length).fill(false));
//     return resultList;
// }

// function backtrack(resultList, tempList, nums, used) {
//     // If the temporary list's length matches nums, we've found a permutation
//     if (tempList.length === nums.length) {
//         resultList.push([...tempList]); // Copy and add the current permutation
//         return;
//     }

//     for (let i = 0; i < nums.length; i++) {
//         // Skip used elements or duplicates
//         if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) continue;

//         // Use the current element
//         used[i] = true;
//         tempList.push(nums[i]);

//         // Recurse to explore further permutations
//         backtrack(resultList, tempList, nums, used);

//         // Backtrack by un-using the current element
//         used[i] = false;
//         tempList.pop();
//     }
// }

// console.log(permuteUnique([1, 1, 2]));


// bruteforce

// function permuteSimple(nums) { 

//     if (nums.length === 1) {
//         return [nums];
//     }

//     const result = [];

//     for (let i = 0; i < nums.length; i++) { 
//         const curr = nums[i]; 
//         const rest = [...nums.slice(0, i), ...nums.slice(i + 1)]; 
//         permuteSimple(rest).forEach(p => { 
//             result.push([curr, ...p]); 
//         });
//     }
    
//     return result;
//  }
 

//  console.log(permuteSimple([1,2,3]));



// // Function to swap characters at positions i and j in an array
// function swap(arr, i, j) {
//     const temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// // Function to print permutations of string
// // Parameters:
// // arr: array of characters
// // l: starting index
// // r: ending index
// function permute(arr, l, r) {
//     if (l === r) {
//         console.log(arr.join('')); // Print the permutation
//     } else {
//         for (let i = l; i <= r; i++) {
//             // Swap characters
//             swap(arr, l, i);
//             // Recursive call
//             permute(arr, l + 1, r);
//             // Backtrack
//             swap(arr, l, i);
//         }
//     }
// }

// // Main function to generate permutations
// function generatePermutations(str) {
//     // Convert string to array since strings are immutable in JavaScript
//     const arr = str.split('');
//     const n = arr.length;
//     permute(arr, 0, n - 1);
// }

// // Example usage
// const str = "ABC";
// console.log("All permutations of", str + ":");
// generatePermutations(str);