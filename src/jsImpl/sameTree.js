/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
     var result = []
     var resultOfP = []
     var resultOfQ = []
    function traverse(node){
        if(!node){
            return
        }
        result.push(node?.left?.val)
        if(node?.left){
             traverse(node.left)
        }
        result.push(node?.right?.val)
        if(node?.right){
            traverse(node.right)
        }
    }
    p.length && result.push(p.val)
    traverse(p)
    resultOfP = result
    result = []
    q.length && result.push(q.val)
    traverse(q)
    resultOfQ = result
    return resultOfP.map(el => String(el)).join('') == resultOfQ.map(el => String(el)).join('')
};