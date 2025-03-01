package dsa;

public class SolutionOne {
    public static   int  maxDropOne(int [] arey){
        if(arey.length == 1){
            return  arey[0];
        }
        int prevNotDel =arey[0];
        int  prevDel = arey[0];
        int max = 0 ;
        int current = 0;
        for (int i=1;i<arey.length;i++){
            prevDel = Math.max(prevNotDel,prevDel+arey[i]);
            prevNotDel = Math.max(arey[i],prevNotDel+arey[i]);
            current = Math.max(prevNotDel,prevDel);
            max = Math.max(max,current);
        }
        return max == 0 ? current: max;

    }

    public  static void  main(String [] ar){
      System.out.println(maxDropOne(new int[]{1,-3,2,4,5,-2}));
    }
}
