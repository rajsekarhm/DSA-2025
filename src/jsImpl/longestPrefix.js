/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var smallString;
    var max = Number.MAX_SAFE_INTEGER
    var prefix = ""
    strs.forEach((ele,index) => {
        if(ele.length < max){
            max = ele.length
            smallString =  ele
        }
    })

    for(let i=0;i<smallString.length;i++){
        const p = smallString.slice(0,i+1)
        const isValid = strs.every((ele) => ele.startsWith(p))
        if(isValid){
            prefix = "".concat(p)
        }
    }
    return prefix
};

longestCommonPrefix(["dog","racecar","car"])