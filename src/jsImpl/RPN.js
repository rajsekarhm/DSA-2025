/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var stack = []
    for(let i = 0 ; i<tokens.length;i++){
        if(['+',"-","*","/"].includes(tokens[i])){
            console.log(stack)
            const suffixNum  = Number(stack.pop())
            const prefixNim =  Number(stack.pop()) 
            var temp = 0
            switch(tokens[i]){
                case "+" :
                    temp = prefixNim + suffixNum
                    break;
                case "-" :
                    temp = prefixNim - suffixNum
                    break;
                case "*" :
                    temp = prefixNim * suffixNum
                    break;
                case "/" :
                    temp =Math.trunc(prefixNim/ suffixNum) 
                    break;
                default:
                    break;
            }
            console.log(temp)
            stack.push(temp)
        }else{
            stack.push(tokens[i])
        }
    }
    return Number(stack.pop())
};


evalRPN(["18"])