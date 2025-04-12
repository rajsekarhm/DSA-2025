var myPow = function(x, n) {
    var ans = 1
    var isMinus = false
    if(x == 1){
        return 1
    }
    if(n.toString().startsWith('-')){
        n = Math.abs(Number(n))
        isMinus = true
    }
    while(1){
        console.log("x",x,"n",n)
        if(n==1){
            ans = ans * x
            break;
        }
        if(n%2 == 1){
            n = n - 1
            ans = ans * x
        }else{
            x = x*x
            n = n/2 
        }
    }
    if(isMinus){
        return (1/ans)
    }
    return ans
};

console.log(myPow(0.44528
    ,))