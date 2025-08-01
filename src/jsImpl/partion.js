/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = []
    var temp = []
    function checkPalindrom(str){
        let left =  0 
        let right = str.length -1 
        while(left <= right){
            if(str[left] != str[right]){
                return false
            }
            left ++;
            right--;
        }
        return true
    }
    function recursive(str,index){
        if(index == s.length){
            result.push([...temp])
            return
        }
        for(let i=index ;i<str.length;i++){
            if(checkPalindrom(str.substring(index,i+1))){
                temp.push(str.substring(index,i+1))
                recursive(str,i+1)
                temp.pop()
            }
        }
    }
    recursive(s,0)
    return result
};


console.log(partition("abcaa")
)



