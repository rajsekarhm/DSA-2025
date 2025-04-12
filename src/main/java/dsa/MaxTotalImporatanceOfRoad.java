package dsa;

import java.util.*;

public class MaxTotalImporatanceOfRoad {

    public  long maximumImportance(int n, int[][] roads) {
        long [] occurance = new long[n];
        for (int[] road:roads){
            ++occurance[road[0]];
            ++occurance[road[1]];
        }
        long max = 0;
        Arrays.sort(occurance);
        for (int i = 0;i<n;i++){
            max = (long) max + (i+1)  * occurance[i];
        }
        return  max;
    }

    public  static  void main(String[] ar) {
        int [][] input = new int[][]{{0,3},{2,4},{1,3}};
        MaxTotalImporatanceOfRoad max = new MaxTotalImporatanceOfRoad();
        max.maximumImportance(5,input);
    }
}
