/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChangeRecursive = function(coins, amount) {
    if(amount == 0){
        return 0
    }
    var dp = [].fill(0)
    var temp = []
    var mixlen =Number.MAX_SAFE_INTEGER
    function recursive(index,target,temp){
        console.log(index)
        if(dp[index]){
            console.log("yes")
            return    dp[index]
        }
       if(index == coins.length){
        if(target == 0){
            if(temp.length < mixlen){
                dp[index] = mixlen
                mixlen = temp.length
            }
            return;
        }
        return
       }

        if(coins[index] <= target){
            temp.push(coins[index])
            recursive(index,target - coins[index],temp)
            temp.pop()
        }
        recursive(index+1,target,temp)
    }

    recursive(0,amount,temp)
    return mixlen == Number.MAX_SAFE_INTEGER ? -1 : mixlen
};


var coinChange = function(coins, amount) {
    const n = coins.length;
    const dp = new Array(n).fill().map(() => new Array(amount + 1).fill(Infinity));
    
    for (let t = 0; t <= amount; t++) {
        dp[0][t] = (t % coins[0] === 0) ? t / coins[0] : Infinity;
    }

    for(let index = 1 ; index<n;index++){
        for(let t =0 ;t<=amount;t++){
            let notTake = dp[index-1][t]
            var take = Number.MAX_SAFE_INTEGER
            if(coins[index]<= t){
                take = dp[index][t-coins[index]] + 1
            }
            dp [index][t] = Math.min(notTake , take);
        }
    }
    return dp[n-1][amount]
}

coinChange([1,2,5],11)