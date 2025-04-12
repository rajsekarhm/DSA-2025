


/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if(stones.length ==  1){
        return  stones.pop()
    }
    var temp = stones
    while(!(temp.length == 1)){
        temp.sort((a,b) => a-b)
        console.log(temp)
        var value = temp[temp.length-1] - temp[temp.length-2]
        temp.pop()
        temp.pop()
        temp.push(value)
    }
    return temp.pop()
};


console.log(lastStoneWeight([8,10,4]))