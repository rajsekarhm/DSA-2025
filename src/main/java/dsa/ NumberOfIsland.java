package dsa;//package dsa;
//
//import java.util.Queue;
//import java.util.*;

import java.util.LinkedList;
import java.util.Queue;

class NumberOfIsland {

    class  node{
       int i;
       int j;
       node(int i ,int j){
           this.i = i;
           this.j = j;
       }
   }
   public    int  numIslands(char [] [] grid) {
       int island=0;
       boolean[][] visited = new boolean[grid.length][grid[0].length];
       if(grid == null){
           return 0 ;
       }
       for (int i = 0;i<grid.length;i++){
           for (int j =0 ;j<grid[i].length;j++){
               if(grid[i][j] == '1' && !(visited[i][j])){
                   // bfs
                   bfsForIsland(i,j,visited,grid);
                   island++;

               }
           }
       }
       return  island;
   }

   public   void bfsForIsland(int vertexI, int vertexJ, boolean visited[][], char[][] grid){
       Queue<node> q = new LinkedList<>();
       visited[vertexI][vertexJ] = true;
       q.add(new node(vertexI,vertexJ));
       int[] dr = {-1, 1, 0, 0};
       int[] dc = {0, 0, -1, 1};
       while (!q.isEmpty()){
           node n = q.poll();
           for(int i =0 ;i<4;i++){
               int newrow  =  n.i + dr[i];
               int newcol = n.j + dc[i];
               if(newrow >=0 && newcol >=0 && newrow < grid.length && newcol < grid[0].length && grid[newrow][newcol] == '1' && !visited[newrow][newcol]){
                   visited[newrow][newcol] = true;
                   q.add(new node(newrow,newcol));
               }
           }
       }
   }
}

