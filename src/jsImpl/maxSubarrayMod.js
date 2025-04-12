


// function maximumSum(a, m) {
//     var maxMod = 0
//     var temp= 0 
//     var currentMod = 0
//     for(let i=0;i<a.length;i++){
//         temp += a[i]
//         var currSingle = a[i] % m
//         currentMod = temp%m
//         var currentMax = Math.max(currSingle,currentMod)
//         if(maxMod < currentMax ){
//             maxMod = currentMax
//         }
//         if(temp < 0){
//             temp =0
//         } 
//     }
//     return maxMod
// }


// function  maximumSum(a,m){
//     var mod = 0
//     var maxMod = 0
//     function findSuperSet(index,mod){
//         if(index == a.length){
//             // console.log(mod)
//             if(maxMod < mod%m){
//                 maxMod = mod%m
//             }
//             return
//         }
//         mod = mod + a[index]
//         findSuperSet(index+1,mod)
//         mod = mod - a[index]
//         findSuperSet(index+1,mod)
//     }
//     findSuperSet(0,mod)
//     return maxMod
// }

function maximumSum(a, m) {
    let maxMod = 0;
    let prefix = 0;
    const sortedPrefixes = [];
    
    insertSorted(sortedPrefixes, 0);
    
    for (const num of a) {
        prefix = (prefix + num) % m;
        maxMod = Math.max(maxMod, prefix);
        
        const idx = binarySearch(sortedPrefixes, prefix);
        if (idx < sortedPrefixes.length) {
            const candidate = (prefix - sortedPrefixes[idx] + m) % m;
            maxMod = Math.max(maxMod, candidate);
        }
        console.log("prefix",prefix)
        insertSorted(sortedPrefixes, prefix);
    }
    
    return maxMod;
}

function binarySearch(arr, target) {
    let low = 0, high = arr.length;
    while (low < high) {
        const mid = (low + high) >>> 1;
        if (arr[mid] <= target) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
}

function insertSorted(arr, value) {
    const idx = binarySearch(arr, value);
    console.log(idx)
    arr.splice(idx, 0, value);
    console.log
    (arr)
}


console.log(maximumSum([3,3,9,9,5],7))