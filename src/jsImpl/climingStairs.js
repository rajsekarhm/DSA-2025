/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var fib = []
    fib[0] = 1
    fib[1] = 1
    var climbStairss = function(n) {
        if(n ==0 ||  n ==1){
            return 1
        }
        if(fib[n]){
            return fib [n]
        }
        return climbStairss(n-2) + climbStairss(n-1)
    };
   return climbStairss(n)
};





console.log(climbStairs(3))