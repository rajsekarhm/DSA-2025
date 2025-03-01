package dsa;

public class Edge {
    int point;
    int distance;
    int stops;
    Edge(int _to,int _weight, int stops){
        this.point = _to;
        this.distance = _weight;
        this.stops = stops;

    }
}
