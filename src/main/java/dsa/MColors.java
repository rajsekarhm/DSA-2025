package dsa;

import java.util.*;

class MColors {
    boolean graphColoring(int v, List<int[]> edges, int m) {
        List<ArrayList<Integer>> cp = new ArrayList<>();
        Map<Integer, Integer> trackMap = new HashMap<>();
        Map<Integer, Set<Integer>> vertex = calculateVertex(edges);
        return  graphColoringDupl(trackMap,vertex,0,v
        ,m);
    }

    boolean graphColoringDupl(Map<Integer, Integer> trackMap, Map<Integer, Set<Integer>> vertex, int currentVertex, int totalVertices, int m) {
        if (currentVertex >= totalVertices) {
            return true;
        }
        for (int i = 0; i < m; i++) {
            if (checkAdj(vertex, trackMap,currentVertex,i)) {
                trackMap.put(currentVertex, i);
                boolean res = graphColoringDupl(trackMap,vertex,currentVertex+1,totalVertices,m);
                if (res) {
                    return res;
                }
            }
            trackMap.remove(currentVertex);
        }
        return  false;
    }
    boolean checkAdj(Map<Integer,Set<Integer>> adjacency, Map<Integer,Integer> trackMap, int curr, int color){
       for(int neigh :  adjacency.getOrDefault(curr,Collections.emptySet())){
           if(trackMap.containsKey(neigh ) && trackMap.get((neigh)) == color ){
               return  false;
           }
       }
        return true;
    }

    Map<Integer,Set<Integer>> calculateVertex(List<int[]> edges){
        Map<Integer,Set<Integer>> map = new HashMap<>();
        for(int[] edge : edges){
            int u = edge[0];
            int v = edge[1];
            map.putIfAbsent(u, new HashSet<>());
            map.putIfAbsent(v, new HashSet<>());
            map.get(u).add(v);
            map.get(v).add(u);
        }
        return map ;
    }
}