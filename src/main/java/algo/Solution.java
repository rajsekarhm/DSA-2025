package algo;

import java.util.ArrayList;
import java.util.List;

import static java.lang.Integer.MIN_VALUE;

public class Solution {
    public static List<Integer> maxSubArray(int[] nums) {
        int start = 0;
        int end = 0;
        int tempStart = 0;
        int max = Integer.MIN_VALUE;
        int sum = 0;

        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
            if (max < sum) {
                start = tempStart;
                end = i;
                max = sum;
            }

            if (sum < 0) {
                sum = 0;
                tempStart = i + 1;
            }
        }

//        // Creating a sublist from the array
        List<Integer> result = new ArrayList<>();
        for (int i = start; i <= end; i++) {
            result.add(nums[i]);
        }

        System.out.println(start);
        System.out.println(end);

        return result;
    }


        public  static  void  main(String [] args){
            int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
            List<Integer> result = maxSubArray(nums);
            System.out.println(result);
        }
}
