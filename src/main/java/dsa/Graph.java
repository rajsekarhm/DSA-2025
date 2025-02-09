package dsa;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
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
        adjList.get(edgeof).add(new Edge(vertex,weight));
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
        Queue<Integer> q = new LinkedList<Integer>();
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
}
