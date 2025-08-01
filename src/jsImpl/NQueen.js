/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = []
    var temp = Array(n).fill([]).map((ele) => Array(n).fill("."))
    function validateCritera(col,row,temp){
        var dupRow = row
        var dupCol = col
        while(dupRow >= 0 && dupCol >= 0 ){
            if(temp[dupRow][dupCol] == "Q"){
                return false
            } 
            dupCol--
            dupRow--
        }
        dupRow = row
        dupCol = col
        while(dupCol >=0){
            if(temp[dupRow][dupCol] == "Q"){
                return false
            }
            dupCol--
        }
        dupRow = row
        dupCol = col
        while(dupCol >= 0 && dupRow < n ){
            console.log("dupCol",dupCol,"dupRow",dupRow)
            if(temp[dupRow][dupCol] == "Q"){
                return false
            }
            dupRow++
            dupCol--
        }
        return true
    }
    function backTrack(c){
        if(c == n){
            result.push(temp.map((ele) => ele.join("")))
            return
        }
        for(let i=0;i<n;i++){
                if(validateCritera(c,i,temp)){
                    temp[i][c] = "Q"
                    backTrack(c+1)
                    temp[i][c] = "."
                }
            }
    }
    backTrack(0)
    return result
};



console.log(solveNQueens(4))