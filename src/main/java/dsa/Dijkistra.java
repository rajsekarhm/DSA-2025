package dsa;

import java.util.*;
import java.util.LinkedList;

//public class Dijkistra {
//   public void dijkstraImpl(Graph grp){
//       Queue<Edge> queue = new LinkedList<>();
//       ArrayList<Integer> dist = new ArrayList<>(grp.adjList.size());
//       for (int i = 0; i < grp.adjList.size(); i++) {
//           dist.add(i,Integer.MAX_VALUE);
//       }
//        boolean[] visited = new boolean[grp.adjList.size()];
//        dist.set(0,0);
//        queue.add(new Edge(0,0,0));
//        visited[0] = true;
//       while (!queue.isEmpty()){
//           Edge cur =  queue.poll();
//           int u = cur.point;
//           int d = cur.distance;
//           if (d > dist.get(u)) continue;
//
//           for(int i =0 ;i < grp.adjList.get(u).size();i++){
//                Edge val = grp.adjList.get(u).get(i);
//                int ans =  val.distance;
//                if(dist.get(u) + ans < dist.get(val.point) ){
//                    dist.set(val.point, dist.get(u) + ans);
//                    queue.add(new Edge(val.point, dist.get(val.point),0));
//                }
//            }
//        }
//      System.out.println(dist);
//   }
//    static class Node {
//        int point;
//        int distance;
//
//        Node(int name, int distance) {
//            this.point = name;
//            this.distance = distance;
//        }
//    }
//
////    public void dijkstraImplgpt(Graph grp) {
////        int n = grp.adjList.size();
////        // Initialize distances for all nodes
////        List<Integer> dist = new ArrayList<>(Collections.nCopies(n, Integer.MAX_VALUE));
////        dist.set(0, 0);
////
////        // PriorityQueue to process nodes based on the current smallest distance
////        PriorityQueue<Edge> pq = new PriorityQueue<>(Comparator.comparingInt(e -> e.distance));
////        pq.add(new Edge(0, 0));
////
////        while (!pq.isEmpty()) {
////            Edge cur = pq.poll();
////            int u = cur.point;
////            int d = cur.distance;
////
////            // Skip if we have already found a better distance for this node
////            if (d > dist.get(u)) continue;
////
////            // Relaxation for all adjacent edges
////            for (Edge edge : grp.adjList.get(u)) {
////                int v = edge.point;
////                int weight = edge.distance;
////                if (dist.get(u) + weight < dist.get(v)) {
////                    dist.set(v, dist.get(u) + weight);
////                    pq.add(new Edge(v, dist.get(v)));
////                }
////            }
////        }
////
////        System.out.println(dist);
////    }
//
//    public static void main(String[] args) {
//        Graph grp = new Graph(6);
//        grp.addEdge(0,1,4);
//        grp.addEdge(0,2,4);
//        grp.addEdge(1,2,2);
//        grp.addEdge(2,3,3);
//        grp.addEdge(2,5,6);
//        grp.addEdge(2,4,1);
//        grp.addEdge(3,5,2);
//        grp.addEdge(4,5,3);
//        Dijkistra dij = new Dijkistra();
//        dij.dijkstraImpl(grp);
//    }
//}


//    public static Map<String, Integer> dijkstra(Map<String, Map<String, Integer>> graph, String start) {
//        Map<String, Integer> shortestDistances = new HashMap<>();
//        ArrayList<String> points  = new ArrayList<String>();
//        Queue<Object> queue = new PriorityQueue<>();
//        for (String node : graph.keySet()) {
//            shortestDistances.put(node, Integer.MAX_VALUE);
//            points.add(node);
//        }
//        shortestDistances.put(start, 0);
//
//        return shortestDistances;
//    }