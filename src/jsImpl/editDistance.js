/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {

    var a1 = word1.length
    var a2 = word2.length

    const dp = []

    for(let j=0;j<a1;j++){
        dp[j]  = Array(a2).fill(false)
    }

    console.log(dp)

    function recursive(i,j){
        if(i<0){
            return j+1;
        }
        if(j<0){
            return i+1
        }
        if(!dp[i][j]) {
            if(word1[i]==word2[j]){
                return 0 + recursive(i-1,j-1)
            }else {
                const insert = recursive(i, j - 1);
                const deleteOp = recursive(i - 1, j);
                const replace = recursive(i - 1, j - 1);
                dp[i][j] = 1 + Math.min(insert, deleteOp, replace);
                return dp[i][j]
            }
        }
        return dp[i][j]
    }
    return recursive(a1-1,a2-1)
};

console.log(
    minDistance("intention","execution")
    )

