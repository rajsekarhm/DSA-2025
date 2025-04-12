package algo;

import java.util.LinkedList;
import java.util.Queue;

class RottenOrange {
    class  Node{
        int i;
        int j ;
        Node(int _i,int _j){
            i = _i;
            j = _j;
        }
    }

    public int traverseBFS(int [][]input){
        Queue<Node> queue = new LinkedList<>();
        if (input == null || input.length == 0){  return -1; }
        int [] dc = new int[]{-1,0,1,0};
        int [] dr = new int[]{0,-1,0,1};
        for(int i =0 ;i<input.length;i++){
            for (int j=0;j<input[i].length;j++){
                if(input[i][j] ==2){
                    queue.add(new Node(i,j));
                }
            }
        }
        int count = 0;
        while (!queue.isEmpty()){
            int size = queue.size();
            boolean isThere = false;
            for(int i=0;i<size;i++){
                Node node = queue.poll();
                for(int k=0;k<4;k++){
                    int nr = node.i + dr[k];
                    int nc = node.j + dc[k];
                    if(nr>=0 && nc>= 0 && (nr < input.length && nc < input[0].length)  && input[nr][nc] == 1){
                        input[nr][nc] = 2;
                        isThere = true;
                        queue.add(new Node(nr,nc));
                    }
                }
            }
            if(isThere){
                count++;
            }
        }
        for(int i=0;i<input.length;i++){
            for (int j=0;j<input[i].length;j++){
                if(input[i][j] == 1){
                    return  -1;
                }
            }
        }
        return  count;
        }

    public  static  void main(String[] ar){
        RottenOrange or  = new RottenOrange();
        System.out.println(or.traverseBFS(new int[][]{{2,1,1},{1,1,0},{0,1,1}}));
    }
}
