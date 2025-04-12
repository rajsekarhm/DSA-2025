/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length
    var n = obstacleGrid[0].length
    const dp = new Array(m);

    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(0);
    }

    if(obstacleGrid[0][0] == 0){
        dp[0][0] = 1
    }else{
        return 0;
    }

    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
    
            if(obstacleGrid[i][j] == 1){
                dp[i][j] = 0
            }
            if(i==0 && j ==0){
                dp[i][j] = 1
            }else{
                var up = 0
                var left = 0
                if(i>0){
                    up = dp[i-1][j]
                }
                if(j>0){
                    left = dp[i][j-1]
                }
                dp[i][j] = up+left
            }
        }
    }
    console.log(dp)
    return dp[m-1][n-1]
};

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))