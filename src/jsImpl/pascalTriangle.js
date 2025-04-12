/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    function dpNCR(n,r) {
        if (r === 0 || r === n) return 1;
        const res = []
        res[0] = 1
        for(let i=1;i<n;i++){
            res[i] = res[i-1] * (i+1);
        }
        const nn = res[n-1]
        const rr = res[r-1] 
        const b = res[n-r-1]
        return nn/(rr*b)
    }
    function findNCR(n,r){
        let res = 1;
        for(let i=0;i<r;i++){
            res = res * (n-i)
            res = res/(i+1)
        }
        return res;
    }
    const result =[]
    var temp = []
    for(let k=1;k<=numRows;k++){
        for(let i=1;i<=k;i++){
            const res = dpNCR(k-1,i-1)
            console.log(res == NaN)
            const val =  typeof res == NaN ? 1 : res
            temp.push( val )
        }
        result.push(temp)
        temp = []
    }
    console.log(result)
    return result
};


function dpNCR(n,r) {
    if (r === 0 || r === n) return 1;
    const res = []
    res[0] = 1
    for(let i=1;i<n;i++){
        res[i] = res[i-1] * (i+1);
    }
    const nn = res[n-1]
    const rr = res[r-1] 
    const b = res[n-r-1]
    return nn/(rr*b)
}

generate(5)
