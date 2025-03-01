package algo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Permutations {
    public static List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> resultList = new ArrayList<>();
        Arrays.sort(nums); // Sort the array to maintain order
        boolean[] used = new boolean[nums.length];
        calculatePermutations(resultList, new ArrayList<>(), nums, used);
        return resultList;
    }

    private static void calculatePermutations(List<List<Integer>> resultList, List<Integer> tempList, int[] nums, boolean[] used) {
        if (tempList.size() == nums.length) {
            resultList.add(new ArrayList<>(tempList));
            return;
        }

        for (int i = 0; i < nums.length; i++) {
            if (!used[i]) {
                used[i] = true;
                tempList.add(nums[i]);
                calculatePermutations(resultList, tempList, nums, used);
                used[i] = false;
                tempList.remove(tempList.size() - 1);
            }
        }
    }

    public static void main(String[] args) {
        int[] nums = {1, 2};
        List<List<Integer>> result = permute(nums);
        System.out.println(result);
    }
}
