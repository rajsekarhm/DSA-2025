package dsa;

import java.util.*;
import java.util.LinkedList;
import java.util.stream.Collectors;

import java.util.*;
import java.util.LinkedList;
import java.util.stream.Collectors;

//class Solution {
//
//    ArrayList<ArrayList<Edge>> adjList = new ArrayList<>();
//
//    public static Graph fromFlights(int[][] flights, int numberOfCities) {
//        Graph graph = new Graph(numberOfCities);
//        for (int[] flight : flights) {
//            int src = flight[0];
//            int dst = flight[1];
//            int price = flight[2];
//            graph.addEdge(src, dst, price);
//        }
//        return graph;
//    }
//
//
//    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
//        return  findCheapestPriceImpl(fromFlights(flights,n),k,dst,src);
//    }
//
//    public Integer findCheapestPriceImpl(Graph grp,int k , int n, int src){
//        Queue<Edge> queue = new LinkedList<>();
//        ArrayList<Integer> dist = new ArrayList<>(grp.adjList.size());
//        ArrayList<Integer> stops = new ArrayList<>(grp.adjList.size());
//        for (int i = 0; i < grp.adjList.size(); i++) {
//            dist.add(i,Integer.MAX_VALUE);
//            stops.add(i,0);
//        }
//        stops.set(src,0);
//        dist.set(src, 0);
//        queue.add(new Edge(src, 0, 0));
//        while (!queue.isEmpty()){
//            Edge cur =  queue.poll();
//
//            int u = cur.point;
//            int d = cur.distance;
//            int s = cur.stops;
//            if (d > dist.get(u)) continue;
//
//            for(int i =0 ;i < grp.adjList.get(u).size();i++){
//                Edge val = grp.adjList.get(u).get(i);
//                int ans =  val.distance;
//                if(dist.get(u) + ans < dist.get(val.point) && s <= k || s + 1 < stops.get(val.point)){
//                    dist.set(val.point, dist.get(u) + ans);
//                    queue.add(new Edge(val.point, dist.get(val.point),s+1));
//                }
//            }
//        }
//        System.out.println(stops);
//        System.out.println(dist);
//        return  dist.get(n) == Integer.MAX_VALUE ? -1 : dist.get(n);
//    }
//
//    public static class Graph {
//        ArrayList<ArrayList<Edge>> adjList;
//
//        public Graph(int numberOfCities) {
//            adjList = new ArrayList<>();
//            for (int i = 0; i < numberOfCities; i++) {
//                adjList.add(new ArrayList<>());
//            }
//        }
//
//        public void addEdge(int src, int dst, int price) {
//            adjList.get(src).add(new Edge(dst, price, 0));
//        }
//    }
//
//    public static class Edge {
//        int point;
//        int distance;
//        int stops;
//
//        public Edge(int point, int distance, int stops) {
//            this.point = point;
//            this.distance = distance;
//            this.stops = stops;
//        }
//    }
//    public static void main(String[] args) {
//        // Sample flights: [src, dst, price]
//        int[][] flights = {
//                {0,1,1},{0,2,5},{1,2,1},{2,3,1}
//        };
//
//        // Create a graph from the flights array for 3 cities.
//        Graph graph = fromFlights(flights, 5);
//
//        Solution sol = new Solution();
//        System.out.println(sol.findCheapestPrice(5,flights,2,1,1));
//    }
//}

public class Graph {

    ArrayList<ArrayList<Edge>> adjList = new ArrayList<>();
    Graph(){}
    Graph(int numberOfVertex){
        for (int i =0 ;i<numberOfVertex;i++){
            adjList.add(new ArrayList<Edge>());
        }
    }

    void  addEdge(int vertex,int edgeof, int weight){
        adjList.get(vertex).add(new Edge(edgeof,weight,0));
//        adjList.get(edgeof).add(new Edge(vertex,weight));
    }

    public static Graph fromFlights(int[][] flights, int numberOfCities) {
        Graph graph = new Graph(numberOfCities);
        for (int[] flight : flights) {
            int src = flight[0];
            int dst = flight[1];
            int price = flight[2];
            graph.addEdge(src, dst, price);
        }
        return graph;
    }

    void printGraph() {
        for (int i = 0; i < adjList.size(); i++) {
            System.out.println("Vertex " + i + ":");
            for (Edge edge : adjList.get(i)) {
                System.out.println("  -> " + edge.point + " (Weight: " + edge.distance + ")");
            }
        }
    }

    void bfs(int vertex){
        boolean[] visited = new boolean[adjList.size()];
        Queue<Integer> q = new LinkedList<>();
        q.add(vertex);
        visited[vertex] = true;
        while (!q.isEmpty()){
            Integer v = q.poll();
            System.out.println(v);
            for (int i = 0; i < adjList.get(v).size(); i++) {
                int neighbor = adjList.get(v).get(i).point;
                if (!visited[neighbor]) {
                    q.add(neighbor);
                    visited[neighbor] = true;
                }
            }

        }
    }

    void  dfs(int vertex){
        boolean[] visited = new boolean[adjList.size()];
        dfs2(vertex,visited);
    }

    void dfs2(int vertex , boolean[] visited){
        visited[vertex] = true;
        System.out.println(vertex);
        for(int i=0;i<adjList.get(vertex).size();i++){
            int v = adjList.get(vertex).get(i).point;
            if(!visited[v]){
                dfs2(v,visited);
            }
        }
    }

    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        return  findCheapestPriceImpl(fromFlights(flights,n),k,dst);
    }

    public Integer findCheapestPriceImpl(Graph grp,int k , int n){
        Queue<Edge> queue = new LinkedList<>();
        ArrayList<Integer> dist = new ArrayList<>(grp.adjList.size());
        ArrayList<Integer> stops = new ArrayList<>(grp.adjList.size());
        for (int i = 0; i < grp.adjList.size(); i++) {
            dist.add(i,Integer.MAX_VALUE);
            stops.add(i,0);
        }

        dist.set(0,0);
        queue.add(new Edge(0,0,0));
        while (!queue.isEmpty()){
            Edge cur =  queue.poll();

            int u = cur.point;
            int d = cur.distance;
            int s = cur.stops;
            if (d > dist.get(u)) continue;

            for(int i =0 ;i < grp.adjList.get(u).size();i++){
                Edge val = grp.adjList.get(u).get(i);
                int ans =  val.distance;
                if(dist.get(u) + ans < dist.get(val.point) && s <= k){
                    dist.set(val.point, dist.get(u) + ans);
                    queue.add(new Edge(val.point, dist.get(val.point),s+1));
                }
            }
        }
       return  dist.get(n-1);
    }


    class  node{
        int i;
        int j;
        node(int i ,int j){
            this.i = i;
            this.j = j;
        }
    }
    public    int  numberOfIsland(char [] [] grid) {
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
                if(newrow >=0 && newcol >=0 && newrow < grid.length && newcol < grid[0].length && grid[newrow][newcol] == '1' &&!visited[newrow][newcol]){
                    visited[newrow][newcol] = true;
                    q.add(new node(newrow,newcol));
                }
            }
        }
    }



    public  static void  main(String[] args){
        Graph g = new Graph();
        char[][] input = new char[][]{
        {'1','1','1','1','0'},
       {'1','1','0','1','0'},
        {'1','1','0','0','0'},
        {'0','0','0','1','0'}
        };
        System.out.println(g.numberOfIsland(input));
    }
}

