/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const temp = []
    const result  = []
    function backtrack(open,close) {
        if(temp.length == 2*n ){
            console.log(temp.join(""))
            result.push(temp.join(""))
            return
        }
        if(open > close) {
            temp.push(")")
            backtrack(open,close+1)
            temp.pop()
        }

        if(open < n){
            temp.push("(")
            backtrack(open+1,close)
            temp.pop()
        }
    }
    backtrack(0,0)
    return result
};


generateParenthesis(3)