/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const upper = (m+n) - 2
    const lowerRight = m-1
    const lowerLeft = n-1;
    function givemefactorial(n){
        let value = 1
        for(let i = n;i>1;i--){
            value = value * i
        }
        return value
    }
    return Math.round(givemefactorial(upper)/(givemefactorial(lowerLeft)*givemefactorial(lowerRight)))
};


var uniquePathsYT = function(m, n) {
    function findPath(i,j){

        if(i== m-1 && j ==n-1){
            return 1;
        }
    
        if(i>m-1 || j>n-1){
            return 0;
        }
        const bottom = findPath(i+1,j)
        const right = findPath(i,j+1)
        return bottom+right
    }

   const result =  findPath(0,0)
   return result
};

console.log(uniquePathsYT(3,7))

