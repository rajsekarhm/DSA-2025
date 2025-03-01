package dsa;

import java.util.*;
import java.util.LinkedList;
import java.util.stream.Collectors;

public class CheapFlight {

    ArrayList<ArrayList<Edge>> adjList = new ArrayList<>();

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


    public static int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        return  findCheapestPriceImpl(fromFlights(flights,n),k,dst,src);
    }

    public static Integer findCheapestPriceImpl(Graph grp,int k , int n, int src){
        Queue<Edge> queue = new LinkedList<>();
        ArrayList<Integer> dist = new ArrayList<>(grp.adjList.size());
        ArrayList<Integer> stops = new ArrayList<>(grp.adjList.size());
        for (int i = 0; i < grp.adjList.size(); i++) {
            dist.add(i,Integer.MAX_VALUE);
            stops.add(i,0);
        }

        dist.set(src, 0);
        queue.add(new Edge(src, 0, 0));
        while (!queue.isEmpty()){
            Edge cur =  queue.poll();

            int u = cur.point;
            int d = cur.distance;
            int s = cur.stops;
            if (d > dist.get(u)) continue;

            for(int i =0 ;i < grp.adjList.get(u).size();i++){
                Edge val = grp.adjList.get(u).get(i);
                int ans =  val.distance;
                System.out.println(u+ " " + ans+dist.get(u) + " " + dist.get(val.point));
                if(dist.get(u) + ans < dist.get(val.point) && s < k+1){
                    dist.set(val.point, dist.get(u) + ans);
                    queue.add(new Edge(val.point, dist.get(val.point),s+1));
                }
            }
        }
        System.out.println(dist);
        return  dist.get(n) == Integer.MAX_VALUE ? -1 : dist.get(n);
    }
    public static class Graph {
        ArrayList<ArrayList<Edge>> adjList;

        public Graph(int numberOfCities) {
            adjList = new ArrayList<>();
            for (int i = 0; i < numberOfCities; i++) {
                adjList.add(new ArrayList<>());
            }
        }

        public void addEdge(int src, int dst, int price) {
            adjList.get(src).add(new Edge(dst, price, 0));
        }
    }

    public static class Edge {
        int point;
        int distance;
        int stops;

        public Edge(int point, int distance, int stops) {
            this.point = point;
            this.distance = distance;
            this.stops = stops;
        }
    }

    public  static void main(String [] args) {
        int [][] input = new int[][]{{0,1,1},{0,2,5},{1,2,1},{2,3,1}};
        System.out.println(findCheapestPrice(input.length,input,0,3,1));
    }
}
