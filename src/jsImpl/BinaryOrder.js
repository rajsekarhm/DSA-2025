/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 */

var levelOrder = function(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while(queue.length){
        const len = queue.length
        const currentLevel = [];
        for(let i=0;i<len;i++){
            const q = queue.shift()
            currentLevel.push(q.value)
            if(q.left) {
                queue.push(q.left)
            }
            if(q.right) {
                queue.push(q.right)
            }
        }

        result.push(currentLevel)
    }
    return result
};

levelOrder({})

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function(s, t) {
//     console.log(" s.split('').sort() == t.split('').sort()", s.split('').sort().join('') , t.split('').sort().join(''))
//     return s.split('').sort() == t.split('').sort()
// };

// isAnagram("anagram"
// ,"nagaram")