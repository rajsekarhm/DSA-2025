
var isSubsequence = function(s, t) {
var splitedS = s.split("")
var splitedT = t.split("")
var count  =0
for(let i = 0 ;i<splitedT.length;i++){
 if(splitedS[count] == splitedT[i] ){
    count++;
 }else{
    splitedT[i] = " "
 }


}

return  splitedS.join('') == splitedT.filter(ele => ele == ' ' ? false : true).join('') ? true : false
 };


console.log(isSubsequence("axc","ahbgdc"))