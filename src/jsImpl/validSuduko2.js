/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rLen = board[0].length;
  const cLen = board.length;

  function checkSubGrid(value, row, col) {
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[startRow + i][startCol + j] == value) {
          return true;
        }
      }
    }
    return false;
  }

  function checkRow(value, row, col) {
    for (let i = 0; i < 9; i++) {
        if(i == col) continue
      if (board[row][i] == value) {
        return true;
      }
    }
    return false;
  }

  function checkColn(value, row, col) {
    for (let i = 0; i < 9; i++) {
      if (i == row) continue;
      if (board[i][col] == value) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < rLen; i++) {
    for (let j = 0; j < cLen; j++) {
      const value = board[i][j];
      if (value === '.') continue; 
      if (
        (checkColn(value, i, j) ||
          checkRow(value, i, j) ||
          checkSubGrid(value, i, j))
      ) {
        return false;
      }
    }
  }
  return true;
};

const r = isValidSudoku([
  [
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."],
  ],
]);

console.log(r);
