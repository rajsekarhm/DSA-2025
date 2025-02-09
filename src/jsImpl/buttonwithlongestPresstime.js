/**
 * @param {number[][]} events
 * @return {number}
 */
var buttonWithLongestTime = function(events) {
    function getAllKeysByValue(map, value) {
        return [...map].filter(([key, val]) => val === value).map(([key]) => key);
    }
    var buttonIndex = -1
    var max= 0
    for(let i=0;i<events.length;i++){
        let pressTime;
        if (i === 0) {
            pressTime = events[i][1]; 
        } else {
            pressTime = events[i][1] - events[i - 1][1]; 
        }
        if(max<pressTime || (pressTime === maxTime && events[i][0] < buttonIndex)){
            max = pressTime
            buttonIndex = events[i][0]
        }
    }
    return buttonIndex
}

console.log(buttonWithLongestTime([[7,1],[19,3],[9,4],[12,5],[2,8],[15,10],[18,12],[7,14],[19,16]]))