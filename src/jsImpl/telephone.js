/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const telephoneKeyMap = new Map()
    telephoneKeyMap.set("2",["a","b","c"])
    telephoneKeyMap.set("3",["d","e","f"])
    telephoneKeyMap.set("4",["g","h","i"])
    telephoneKeyMap.set("5",["j","k","l"])
    telephoneKeyMap.set("6",["m","n","o"])
    telephoneKeyMap.set("7",["p","q","r","s"])
    telephoneKeyMap.set("8",["t","u","v"])
    telephoneKeyMap.set("9",["w","x","y","z"])
    const n = digits.length
    if(n == 1 || n == ""){
        return telephoneKeyMap.get(digits[0]) || []
    }
    var result = []
    function recursive(i,temp){
        if(n == temp.length ){
            result.push(temp.join(""))
            return
        }
        for(let c of telephoneKeyMap.get(digits[i])){
            temp.push(c)
            recursive(i+1,temp)
            temp.pop()
        }
    }
    recursive(0,[])
    return result
};

letterCombinations("22")