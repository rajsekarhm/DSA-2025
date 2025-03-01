package dsa;

import java.util.ArrayList;
import java.util.List;

public class Parantheses {
    public List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();
        StringBuilder current = new StringBuilder();
        backtrack(current, 0, 0, n, result);
        return result;
    }

    private void backtrack(StringBuilder current, int open, int close, int n, List<String> result) {
        // If the current string has reached the maximum length (2*n), add it to the result.
        if (current.length() == 2 * n) {
            result.add(current.toString());
            return;
        }

        // If there are more open brackets than close brackets, we can add a closing bracket.
        if (open > close) {
            current.append(")");
            backtrack(current, open, close + 1, n, result);
            current.deleteCharAt(current.length() - 1); // backtrack
        }

        // If we haven't used up all open brackets, we can add an opening bracket.
        if (open < n) {
            current.append("(");
            backtrack(current, open + 1, close, n, result);
            current.deleteCharAt(current.length() - 1); // backtrack
        }
    }

    // For quick testing
    public static void main(String[] args) {
        Parantheses sol = new Parantheses();
        List<String> parentheses = sol.generateParenthesis(3);
        for (String s : parentheses) {
            System.out.println(s);
        }
    }
}

