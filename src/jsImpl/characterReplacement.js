
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    var left = 0
    var ans = 0
    let maxFreq = 0;
    var characterMap =  new Map()
    for(let right =0;right<s.length;right++){
        const char = s[right];
   
        characterMap.set(char,(characterMap.get(char) ||  0) + 1)
        maxFreq = Math.max(maxFreq,characterMap.get(char))
        console.log("characterMap",characterMap)
        let replacement = (right-left + 1) - maxFreq
        console.log("replacement",replacement)
       while(replacement > k){
        const leftChar = s[left];
        characterMap.set(leftChar,characterMap.get(leftChar)- 1)
        left++
        replacement =  (right-left + 1 ) - maxFreq
       }
       ans = Math.max(ans,right-left + 1)
    }
    console.log("ans",ans)
    return ans
};

characterReplacement("AABABBA",2)