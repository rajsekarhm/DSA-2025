var fib = function(n) {
    var fibs = []
    fibs[0] = 0
    fibs[1] = 1
    var climbStairss = function(n) {
        if(n == 1){
            return 1
        }
        if(n == 0){
            return 0
        }
        return climbStairss(n-2) + climbStairss(n-1)
    };
   return climbStairss(n)
};

console.log(fib(4))