package dsa;

public class PreditWinner {
    public static  boolean predictTheWinner(int[] nums) {
        int n = nums.length;
        // Use Integer to allow null (indicating "not computed")
        Integer[][] dp = new Integer[n][n];
        // Start the recursion from the full array range
        return maxDiff(nums, 0, n - 1, dp) >= 0;
    }

    private static int maxDiff(int[] nums, int left, int right, Integer[][] dp) {
        // Base case: only one element left
        if (left == right) {
            return nums[left];
        }
        // Return memoized result if already computed
        if (dp[left][right] != null) {
            return dp[left][right];
        }
        // Choose the left element and compute the difference
        int leftChoice = nums[left] - maxDiff(nums, left + 1, right, dp);
        // Choose the right element and compute the difference
        int rightChoice = nums[right] - maxDiff(nums, left, right - 1, dp);
        // Store and return the maximum difference
        dp[left][right] = Math.max(leftChoice, rightChoice);
        return dp[left][right];
    }

    public  static  void  main(String [] ar) {
        System.out.println(predictTheWinner(new int[]{1,5,2}));
    }
}
