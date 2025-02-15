function QuickSort(numbs,low,high){
if(low>=high){
return
}
    function swap(i, j) {
        const temp = numbs[i];
        numbs[i] = numbs[j];
        numbs[j] = temp;
    }

var mid = Math.floor((low + high)/2);
var start = low;
var end = high
var pivot = numbs[mid]
while(start<=end){
 while(numbs[start]<pivot){
 start++;
 }

 while(numbs[end] > pivot){
 end--;
 }
 if(start<=end){
 swap(start,end)
 start++;
 end--;
 }
}
QuickSort(numbs,low,end)
QuickSort(numbs,start,high)
return numbs
}
console.log(QuickSort([10,20,30,5,10,50],0,5))