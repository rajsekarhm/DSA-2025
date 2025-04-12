/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var board_status = Array.from({ length: board.length }, () => new Array(board[0].length).fill(false))
    // var delcols = [-1,0,1,0]
    // var delrows = [0,1,0,-1]
 
    function dfs(i,j,count){
        if(count == word.length) {
            return true
        }
        if(i < 0 || j < 0 || i >= board.length  || j >= board[0].length || word[count] != board[i][j] || board_status[i][j]){
            return false
        }
        board_status[i][j] =  true 
        var result  = dfs(i+1,j,count+1) || dfs(i-1,j,count+1) || dfs(i,j+1,count+1) || dfs(i,j-1,count+1)
        board_status[i][j] =  false 
        return result
    }
    for(let i =0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(dfs(i,j,0) ){
                return true
            }
        }
    }
    return false
};

// function exist(board, word) {
//     const ROWS = board.length;
//     const COLS = board[0].length;
//     const visited = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

//     const dfs = (r, c, i) => {
//         if (i === word.length) return true;
//         if (r < 0 || c < 0 || r >= ROWS || c >= COLS || 
//             board[r][c] !== word[i] || visited[r][c]) {
//             return false;
//         }

//         visited[r][c] = true;
//         const res = dfs(r + 1, c, i + 1) || 
//                     dfs(r - 1, c, i + 1) ||
//                     dfs(r, c + 1, i + 1) || 
//                     dfs(r, c - 1, i + 1);
//         visited[r][c] = false;
//         return res;
//     };

//     for (let r = 0; r < ROWS; r++) {
//         for (let c = 0; c < COLS; c++) {
//             if (dfs(r, c, 0)) return true;
//         }
//     }
//     return false;
// }


console.log(exist([["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]]
    ,"ABCESEEEFS"))