var permute = function(nums) {
  var resultList = [];
  nums.sort((a, b) => a - b); 
  permutationCalculate(resultList, [], nums, new Array(nums.length).fill(false));
  return removeDuplicates(resultList).map((ele) => JSON.parse(ele))
};


function permutationCalculate(resultList,tempList,nums,used){
  if(tempList.length == nums.length){
    resultList.push([...tempList])
    return 
  }

  for(let i=0;i<nums.length;i++){
      if(!used[i]){
          used[i]=true
          tempList.push(nums[i])
          permutationCalculate(resultList,tempList,nums,used)
          used[i]=false
          tempList.pop()
      }
  }
}


function removeDuplicates(arr) {

  const uniqueSet = new Set();

  for (let subArray of arr) {
    const subArrayString = JSON.stringify(subArray);

    uniqueSet.add(subArrayString);
  }
  return [...uniqueSet]
}
console.log(permute([-1,1,2]))


