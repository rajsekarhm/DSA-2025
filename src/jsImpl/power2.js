/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n  > 0 && Math.log2(n) % 2 == 0 ? true : false  
};


console.log
(isPowerOfTwo(8))
