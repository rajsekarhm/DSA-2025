package dsa;

import java.util.*;
import java.util.LinkedList;
import java.util.stream.Collectors;

public class Graph {
    ArrayList<ArrayList<Edge>> adjList = new ArrayList<>();
    Graph(int numberOfVertex){
        for (int i =0 ;i<numberOfVertex;i++){
            adjList.add(new ArrayList<Edge>());
        }
    }

    void  addEdge(int vertex,int edgeof, int weight){
        adjList.get(vertex).add(new Edge(edgeof,weight));
//        adjList.get(edgeof).add(new Edge(vertex,weight));
    }

    void printGraph() {
        for (int i = 0; i < adjList.size(); i++) {
            System.out.println("Vertex " + i + ":");
            for (Edge edge : adjList.get(i)) {
                System.out.println("  -> " + edge.to + " (Weight: " + edge.weight + ")");
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
                int neighbor = adjList.get(v).get(i).to;
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
            int v = adjList.get(vertex).get(i).to;
            if(!visited[v]){
                dfs2(v,visited);
            }
        }
    }

    void findCheapestPrice(int n,int src, int dst, int k){
        boolean[] visited = new boolean[n+1];
        System.out.println(n);
        Queue<Integer> q = new LinkedList<>();
        q.add(src);
        visited[src] = true;
        while (!q.isEmpty()){
            Integer v = q.poll();
            System.out.println(v);
            for (int i = 0; i < adjList.get(v).size(); i++) {
                int neighbor = adjList.get(v).get(i).to;
                System.out.println(neighbor);
                if (!visited[neighbor]) {
                    q.add(neighbor);
                    visited[neighbor] = true;
                }
            }
        }
    }
    public  static void  main(String[] args){
        int [] [] list = {{0,1,100},{1,2,100},{2,0,100},{1,3,600},{2,3,200}};
        Graph g = new Graph(3);
        Arrays.stream(list).forEach((x) -> {
            g.addEdge(x[0],x[1],x[2]);
        });
        g.findCheapestPrice(3,0,3,1);
    }
}
