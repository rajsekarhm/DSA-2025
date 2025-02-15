var maxProfit = function(prices) {
    if(prices.length == 1){
        return prices[0]
    }
    var max = 0
    var buyPrice =  Number.MAX_SAFE_INTEGER;
    for(let i=0;i<prices.length;i++){
        if(buyPrice > prices[i] ){
            buyPrice = prices[i]
        }
        max = Math.max(prices[i] - buyPrice,max)
    }
    return max
};

console.log(maxProfit([7,6,4,3,1]))