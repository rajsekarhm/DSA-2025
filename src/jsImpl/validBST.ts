// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// var isValidBST = function(node) {
    
//     function bst(n){

//         var left = 2 * n + 1
//         var right = 2 * n + 2

//         if(n == node.lenght){
//             return true;
//         }


//         if(node[left] < node[n]){
//             bst(left)
//         }

//         if(node[right] > node[n]){
//             bst(right)
//         }
//         return false

//     }
//     return bst(node)

// };


  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }
 


function isValidBST(root: TreeNode | null): boolean {
    function bst(node: TreeNode, min:number, max:number): Boolean{
        if(node == null){
            return true
        }

        if(node.val <= min || node.val >= max){
            return false
        }
        return bst(node.left,min,node.val) && bst(node.right,node.val,max)
    }
    return bst(root,Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)
};