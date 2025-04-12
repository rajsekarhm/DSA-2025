/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function isValid(board, x, i, j) {
  for (let k = 0; k < 9; k++) {
    if (board[i][k] == x) {
      return false;
    }

    if (board[k][j] == x) {
      return false;
    }

    if (
      board[3 * Math.floor((i / 3)) + Math.floor(k / 3)][
       3 *  Math.floor( (j / 3))  + (k % 3)
      ] == x
    ) {
      return false;
    }
  }

  return true;
}

var solveSudoku = function (board) {
  const row = board.length;
  const cols = board[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] == ".") {
        for (let k = 1; k <= 9; k++) {
          if (isValid(board, k.toString(), i, j)) {
            board[i][j] = k.toString();
            const res = solveSudoku(board);
            if (res == true) {
              return true;
            } else {
              board[i][j] = ".";
            }
          }
        }
        return false;
      }
    }
  }
  return true;
};

solveSudoku(
  [
    ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
    ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
    ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
    ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
    ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
    ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
    ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
    ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
    ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
  ],
  1,
  3
);
