/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    var result = new Array(temperatures.length).fill(0);
    const stack  = []
    for(let i =0 ;i< temperatures.length ;i++){
        while(stack.length && temperatures[i] > stack[stack.length-1]?.temp){
            const { temp ,inx} = stack.pop()
            result[inx] = i - inx;
        }
        stack.push({temp:temperatures[i],inx:i})
    }
   return result
};

dailyTemperatures([73,74,75,71,69,72,76,73] )