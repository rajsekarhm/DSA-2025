/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var predictTheWinner = function(nums) {
//     var p1Sum = 0 
//     var p2Sum = 0
//     function pick(num,which,type){
//         if(num.length == 1){
//             if(which == "0"){
//                 p1Sum = p1Sum + (type == "start" ? num.shift() : num.pop())
//             }
//             if(which == "1"){
//                 p2Sum = p2Sum +(type == "start" ? num.shift() : num.pop()  )
//             }
//             return
//         }
//         if(which == "0"){
//             p1Sum = p1Sum + (type == "start" ? num.shift() : num.pop())
//             pick(num,"1","end")
//         }
//         if(which == "1"){
//             p2Sum = p2Sum + (type == "start" ? num.shift() : num.pop()  )
//             pick(num,"0","start")
//         }
//     }

//     // function pickRight(numm,which){
//     //     if(numm.length == 1){
//     //         if(which == "0"){
//     //             p1Sum = p1Sum + numm.pop()
//     //         }
//     //         if(which == "1"){
//     //             p2Sum = p2Sum + numm.pop()  
//     //         }
//     //         return
//     //     }
//     //     if(which == "0"){
//     //         p1Sum = p1Sum + numm.pop()
//     //         pickRight(numm,"1")
//     //     }
//     //     if(which == "1"){
//     //         p2Sum = p2Sum + numm.pop()  
//     //         pickRight(numm,"0")
//     //     }
//     // }
//     pick([...nums],"0","start")
//     console.log(p1Sum,p2Sum)
//     if(p1Sum > p2Sum){
//         return true
//     }
//     p1Sum = 0
//     p2Sum = 0
//     pick([...nums],"0","end")
//     if(p1Sum > p2Sum){
//         return true
//     }
//     console.log(p1Sum,p2Sum)

//     return false
// };


// predictTheWinner([2,4,55,6,8])


var predictTheWinner = function(nums){
    const dp  = []
    for(let i =0 ;i<nums.length;i++){
        dp[i] = Array(nums.length).fill(-1)
    }
    function maxDiff(nums,left,right,n){
        if(left == right){
            return nums[left]
        }
        if(dp[left][right] != -1){
            return dp[left][right]
        }
        const sl = nums[left] - maxDiff(nums,left+1,right,nums.length)
        const sr = nums[right] - maxDiff(nums,left,right-1,nums.length)
        dp[left][right] = Math.max(sl,sr)
        return Math.max(sl,sr)
    }

    return maxDiff(nums,0,nums.length-1,nums.length) >= 0 ? true : false
 }

console.log( predictTheWinner([1,5,233,7]))