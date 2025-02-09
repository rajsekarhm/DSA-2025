package algo;

import java.util.ArrayList;
import java.util.List;

public class BackTracking {

    public static List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        List<Integer> sol = new ArrayList<>();
        backtrack(nums, sol, res, 0);
        return res;
    }

    private static void backtrack(int[] nums, List<Integer> sol, List<List<Integer>> res, int i) {
        int n = nums.length;
        if (i == n) {
            // At the end: print debug information similar to console.log({i, n}) and console.log(...sol)
            System.out.println("{i: " + i + ", n: " + n + "}");
            System.out.println(sol);
            res.add(new ArrayList<>(sol));  // Add a copy of the current subset
            return;
        }

        // Choose to include nums[i]
        sol.add(nums[i]);
        backtrack(nums, sol, res, i + 1);

        // Backtrack: remove the last element and choose to not include nums[i]
        sol.remove(sol.size() - 1);
        backtrack(nums, sol, res, i + 1);
    }

    // A simple main method to test the function
    public static void main(String[] args) {
        int[] nums = {1, 2,3};
        List<List<Integer>> subsets = subsets(nums);
        System.out.println("All subsets:");
        for (List<Integer> subset : subsets) {
            System.out.println(subset);
        }
    }
}