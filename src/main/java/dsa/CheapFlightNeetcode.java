package dsa;

import java.util.Arrays;

public class CheapFlightNeetcode {
    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        int [] pricess = new int[n];
        Arrays.fill(pricess,Integer.MAX_VALUE);
        pricess[src] = 0;
        for (int i=0;i<=k ;i++){
            int [] temp = Arrays.copyOf(pricess,n);
            for(int [] flight : flights){
                int s = flight [0];
                int d = flight[1];
                int p = flight[2];
                if(pricess[s] == Integer.MAX_VALUE) {
                    continue;
                }
                System.out.println(pricess[s] + p);
                if(pricess[s] + p < temp[d] ){
                    temp[d] = pricess[s] + p;
                }
            }
            pricess = temp;
        }
        return  pricess[dst] == Integer.MAX_VALUE ? -1 : pricess[dst];
    }
    public static void main(String[] ar){
        int [][] input = new int[][]{{0,1,100},{1,2,100},{0,2,500}};
        CheapFlightNeetcode neet =  new CheapFlightNeetcode();
        neet.findCheapestPrice(input.length,input,0,2,1);
    }
    }
