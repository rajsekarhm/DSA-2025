// var wordBreak = function(s, wordDict) {
//     var isVisted = []
//     var result = []
//     var temp = []

//     function recursive(temp,result,isVisted,n){
//         if(n == temp.length){
//             result.push([...temp])
//             return
//         }
//         for(let i=0;i<wordDict.length;i++){
//             if(!isVisted[i]){
//                 isVisted[i] = true
//                 temp.push(wordDict[i])
//                 recursive(temp,result,isVisted,n)
//                 temp.pop()
//                 isVisted[i]= false;
//             }
//         }
//     }
//     recursive(temp,result,isVisted,wordDict.length)
//     const answer = result.map(res => res.join(""))
//     return answer.includes(s) 

// };

// wordBreak("leetcode",["cats","dog","sand","and","cat"])


var wordBreak = function(s, wordDict) {
    const word = new Set(wordDict)
    const dp = Array(s.length+1).fill(false)
    dp[0] = true
    for(let i=1;i<=s.length;i++){
        for(let j=0;j<i;j++){
            console.log(j,s.substring(i,j))
            if(dp[j] && word.has(s.substring(i,j))){
                dp[i] = true
                continue
            }
        }
    }
    console.log(dp)
    return dp[s.length]
}

wordBreak("leetcode",["leet","code"])