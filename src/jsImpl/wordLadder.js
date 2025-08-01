/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    var set= new Set(  wordList)
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var queue = []
    function bfs(w){
        queue.push({_word:w,seq:1})
        while(queue.length){
            var { _word:word , seq:itr} =  queue.pop()
            itr++
            if(word == endWord){
                return Number(itr)
            }
            console.log(word)
            for(let k =0 ;k<word.length;k++){
                for(let i =0 ;i< alphabet.length;i++){
                    let t = word.slice(0, k) + alphabet[i] + word.slice(k + 1);
                    if(set.has(t) ){
                       set.delete(t)
                       queue.push({_word: t,seq:itr})              
                    }
                }
            }
        }
        return 0
    }  
    const result = bfs(beginWord)
    return  result 
};

console.log(
    ladderLength("hot",
    "cog",
    ["hot","dot","dog","lot","log"]))