package algo;

import java.util.ArrayList;
import java.util.List;

public class CombinationSum {
    public static List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> temp = new ArrayList<>();
        recursive(0, target, candidates, temp, result);
        return result;
    }

    private static void recursive(int index, int target, int[] candidates, List<Integer> temp, List<List<Integer>> result) {
        if (index == candidates.length) {
            if (target == 0) {
                result.add(new ArrayList<>(temp));
            }
            return;
        }

        if (candidates[index] <= target) {
            temp.add(candidates[index]);
            recursive(index, target - candidates[index], candidates, temp, result);
            temp.remove(temp.size() - 1);
        }

        recursive(index + 1, target, candidates, temp, result);
    }

    public static void main(String[] args) {
        int[] candidates = {2, 3, 6, 7};
        int target = 7;
        System.out.println(combinationSum(candidates, target));
    }
}