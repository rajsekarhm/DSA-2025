/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];
  candidates = candidates.sort((a, b) => a - b);
  function backtrack(index, toReach, temp) {
      if (toReach == 0) {
        result.push([...temp]);
        return;
      }

    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i] == candidates[i - 1]) {
         continue;
      }
      if (candidates[i] > toReach) {
        break;
      }
      if (candidates[i] <= toReach) {
        temp.push(candidates[i]);
        backtrack(i + 1, toReach - candidates[i], temp);
        temp.pop();
      }
    }
    return;
  }
  backtrack(0, target, []);
  return result
};

combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
