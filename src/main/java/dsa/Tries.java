package dsa;

import java.util.ArrayList;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {
    }

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class Tries {
        public int kthSmallest(TreeNode root, int k) {
            ArrayList<Integer> list = new ArrayList();
            inOrderReversal(root,list);
            return  list.get(k-1);
        }
        public void inOrderReversal(TreeNode n,ArrayList<Integer> list){
            if(n == null){
                return;
            }
            inOrderReversal(n.left,list);
            System.out.println(n.val);
            list.add(n.val);
            inOrderReversal(n.right,list);
        }
        public static  void  main(String[] a){
            Tries t = new Tries();
          TreeNode tre = new TreeNode(5);
          tre.left = new TreeNode(3);
          tre.right = new TreeNode(6);
          tre.left.left = new TreeNode(2);
          tre.right.right = new TreeNode(4);
          tre.left.left.left =  new TreeNode(1);
          t.kthSmallest(tre,2);

        }
}
