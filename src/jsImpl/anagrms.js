/* @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length == 0 ){
        return []
    }
    var result = new Map()
    for(let i =0;i<strs.length;i++){
        const sorted = strs[i].split('').sort().join()
        if(!result.has(sorted)){
            result.set(sorted,[])
        }
        result.set(sorted,[...result.get(sorted),strs[i]])
    //     const temp = []
    //     if(!visited[i]){
    //         temp.push(strs[i])
    //     }
    //    for(let j =0;j<strs.length;j++){
    //     console.log(strs[i].split('').every(e => strs[j].includes(e)))
    //     if(!visited[j]  && strs[i].split('').every(e => strs[j].includes(e))){
    //         temp.push(strs[j])
    //         visited[j] = true
    //     }
    //    }
    //    result.push([...new Set(temp)])
    }
    // return result.filter((ele) => ele.length)
    const ans = []
    result.forEach((ele) => ans.push(ele))
    return ans
};



