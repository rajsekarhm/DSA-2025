/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const  col = grid[0].length
    const row =  grid.length 
    const dp = new Array(row);

    for (let i = 0; i < row; i++) {
        dp[i] = new Array(col).fill(null);
    }

 
    function recusive(x,y){
        if(x == row-1 && y == col-1  ){
            return grid[x][y]
        }
        if(x >= row || y >= col){
            return Infinity
        }
        if( dp[x][y]){
            return  dp[x][y]
        }
        var right = recusive(x,y+1)
        var down = recusive(x+1,y)
        dp[x][y] = grid[x][y] + Math.min(right, down);
        return  dp[x][y]
    }
   return recusive(0,0)
};

minPathSum([[1,2,3],[4,5,6]])