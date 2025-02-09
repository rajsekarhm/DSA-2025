package dsa;

import java.util.*;

public class Dijkistra {
    // Function to implement Dijkstra's Algorithm
    public static Map<String, Integer> dijkstra(Map<String, Map<String, Integer>> graph, String start) {
        Map<String, Integer> shortestDistances = new HashMap<>();
        ArrayList<String> points  = new ArrayList<String>();
        Queue<Object> queue = new PriorityQueue<>();
        for (String node : graph.keySet()) {
            shortestDistances.put(node, Integer.MAX_VALUE);
            points.add(node);
        }
        shortestDistances.put(start, 0);

        return shortestDistances;
    }


    static class Node {
        String name;
        int distance;

        Node(String name, int distance) {
            this.name = name;
            this.distance = distance;
        }
    }

    public static void main(String[] args) {

        Map<String, Map<String, Integer>> graph = new HashMap<>();
        graph.put("A", Map.of("B", 1, "C", 4));
        graph.put("B", Map.of("A", 1, "C", 2, "D", 5));
        graph.put("C", Map.of("A", 4, "B", 2, "D", 1));
        graph.put("D", Map.of("B", 5, "C", 1));

        Map<String, Integer> shortestPaths = dijkstra(graph, "A");
        System.out.println("Shortest distances from A:");
        for (Map.Entry<String, Integer> entry : shortestPaths.entrySet()) {
            System.out.println("To " + entry.getKey() + ": " + entry.getValue());
        }
    }
}
