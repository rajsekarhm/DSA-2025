/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
/**
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.} gas 
 */

// var canCompleteCircuit = function(gas, cost) {
//     var maxRefill = -1;
//     for (let i=0;i<gas.length;i++){
//         if(gas[i] <= cost[i]){
//             continue
//         }
//         var index = i
//         var temp = i
//         do{
//             console.log(gas[temp])
//             temp++
//             if(temp == gas.length){
//                 temp = 0
//             }
//         }while(!(temp == index))
//     }
// };

var canCompleteCircuit = function (gas, cost) {
  const sum = (arrs) => {
    let ans = 0;
    arrs.forEach(element => {
        ans += element
    });
    
    return ans;
  };
  if (sum(gas) < sum(cost)) {
    return -1;
  }
  var total = 0
  var idx = 0

  for(let i=0;i< gas.length;i++){
    var total  = total + (gas[i] - cost[i])
    if(total<0){
        total = 0
        idx = i+1
    }
  }
  return idx
};

console.log(canCompleteCircuit([2,3,4]
    , [3,4,3]
))