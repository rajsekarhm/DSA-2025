/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    // let count = new Array(26).fill(0);
    // for (let task of tasks) {
    //     count[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    // }

    // let maxHeap = []
    // for (let i = 0; i < 26; i++) {
    //     if (count[i] > 0) maxHeap.push(count[i]);
    // }
    // let time = 0;
    // let q = [] 

    // while(q.length > 0 || maxHeap.length > 0){
    //     time++
    //     if(maxHeap.length > 0 ){
    //         let cnt = maxHeap.pop() - 1
    //         if(cnt > 0){
    //             q.push([cnt,time+n])
    //         }
    //     }

    //     if(q.length > 0 && q.shift()[1] == time){
    //         maxHeap.push(q.pop()[0])
    //     }
    // }
    // return time  
    const count = new Array(26).fill(0);
    for (const task of tasks) {
        count[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }

    const maxf = Math.max(...count);
    let maxCount = 0;
    for (const i of count) {
        if (i === maxf) {
            maxCount++;
        }
    }

    const time = (maxf - 1) * (n + 1) + maxCount;
    return Math.max(tasks.length, time);  

};

console.log(leastInterval(["A","A","A","B","B","B"],2))