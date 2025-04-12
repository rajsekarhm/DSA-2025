/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var maxDepth = function(root) {
//     var count = 1
//     function heap(index){
//         var left = index * 2 + 1
//         var right = index * 2 + 2
//         if(root[left] == null && root[right] ==null){
//             return
//         }
//         count++
//         if(root[left]){
//             heap(left)
//         }
//         if(root[right]){
//             heap(right)
//         }
//     }
//      heap(0)
//      return count
// };
// console.log(maxDepth([3,9,20,null,null,15,7]))


function maxDepth(root){
    if(root == null){
        return 0
    }
    return 1+ Math.max(maxDepth(root.left),maxDepth(root.right))
}