package dsa;

public class GraphProbelms {
         public class TreeNode {
      int val;
      TreeNode left;
      TreeNode right;
      TreeNode() {}
      TreeNode(int val) { this.val = val; }
      TreeNode(int val, TreeNode left, TreeNode right) {
          this.val = val;
          this.left = left;
          this.right = right;
      }
        public int maxDepth(TreeNode root) {
              int count = 0;
              return  0;
        }

        public  void  traversal(TreeNode node,int leftcount, int rightcount){
           if(node.left == null || node.right == null){
               return;
           }
           if(node.left != null){
               leftcount++;
               traversal(node,leftcount,rightcount);
           }

           if(node.right != null){
               rightcount++;
               traversal(node,leftcount,rightcount);
           }
        }
         }

         public  static  void main(String[] ar){

         }

}
