/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {  
    const stack = []
    const paranthesesMap =  new Map()
    paranthesesMap.set(")","(")
    paranthesesMap.set("}","{")
    paranthesesMap.set("]","[")
    const splittary = s.split('')
    // console.log(splittary)
    for(let  i =0;i<splittary.length;i++){
        if(["(","{","["].includes(splittary[i])){
            stack.push(splittary[i])
            continue
        }
        if(stack.length > 0 &&  paranthesesMap.get(splittary[i]) == stack[stack.length-1]){
            stack.pop()
        }else{
            return false
        }
    }  
       
    return stack.length == 0 
};

// console.log(isValid("(())()"))

module.exports = isValid
