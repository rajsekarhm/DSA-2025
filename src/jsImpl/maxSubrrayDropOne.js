/**
 * @param {number[]} arr
 * @return {number}
//  */
// var maximumSumOnDel= function(arr) {
//     if(arr.length == 1){
//         return arr[0] 
//     }
//     var max = Number.MIN_SAFE_INTEGER
//     var temp = 0
//     var start = 0
//     var end = 0;
//     var val = 0
//     var newArray

//     // [1,-2,-2,3]
//     for(let k=0;k<arr.length;k++){
//         let temp = arr
//         if(arr[k] <= 0){
//             newArray  =  [...temp.slice(k,1)]    
//         }else{
//             newArray = [...arr]
//         }
//         for(let i=0 ;i<newArray.length;i++){
            
//            val = val + newArray[i] 
//            if(max < val) {
//                start = temp
//                max = val
//                end= i
//            }
//            if(val < 0){
//                val = 0
//                temp = i+1;
//            }
//        }
//        val = 0
//     }
//     return max == 0 ? -1 : max
// };


//  const maximumSumOnDel = function(arr){
//     if(arr.length == 1){
//         return arr[0];
//     }
//     const left = []
//     const right = []
//     function k(newArray,ary){
//         var max= 0 
//         var val = 0
//         var start=0
//         var end=0
//         var temp=0
//         for(let i=0 ;i<newArray.length;i++){
//             val = val + newArray[i] 
//             if(max < val) {
//                 ary.push(val)
//                 start = temp
//                 max = val
//                 end= i
//             }
//             if(val < 0){
//                 ary.push(val)
//                 val = 0
//                 temp = i+1;
//             }
//         }
//         return ary
//     }

//     console.log(k([1,-3,2,4,5,-2],[]))
//     console.log(k([-2,5,4,2,-3,1],[]))
// }
// console.log(maximumSumOnDel([1,-3,2,4,5,-2]))