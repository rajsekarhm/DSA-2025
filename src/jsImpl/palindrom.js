/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s == " "){
        return true
    }
    function removeUnavoid(vars){
        return vars.filter(e => e.match(/[a-zA-Z0-9]/)).join('').toLowerCase()
    }
    var pali = s.split('')
    var before = removeUnavoid([...pali])
    var left = 0
    var right = s.length-1
    while(left<right){
        var temp = pali[left]
        pali[left] = pali[right].toLowerCase()
        pali[right] = temp.toLowerCase()
        left++
        right--
    }
    return before == removeUnavoid(pali) ? true : false
};

console.log(isPalindrome("Was it\\ a rat I saw?"))