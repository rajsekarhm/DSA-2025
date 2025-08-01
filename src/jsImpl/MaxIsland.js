/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const rowLen = grid.length;
  const colLen = grid[0].length;
  const visited = Array.from({ length: rowLen }, () => Array(colLen).fill(false));
  var max = Number.MIN_SAFE_INTEGER

  function dfs(i, j) {
    if(i < 0 || j < 0 || i >= rowLen || j >= colLen || visited[i][j] || grid[i][j] == 0){
        return  0
    }
    var area = 1
    visited[i][j] = true
    area += dfs(i,j-1) 
    area += dfs(i-1,j) 
    area += dfs(i,j+1) 
    area += dfs(i+1,j)
    return area
    // const NR = [0, -1, 0, 1];
    // const NC = [-1, 0, 1, 0];
    // for (let k = 0; k < 4; k++) {
    //   const nr = i + NR[k];
    //   const nc = j + NC[k];
    //   if (
    //     nr >= 0 &&
    //     nc >= 0 &&
    //     nr < rowLen &&
    //     nc < colLen &&
    //     !visited[nr][nc] &&
    //     grid[nr][nc] == 1
    //   ) {
    //     visited[nr][nc] = true;
    //     dfs(nr, nc);
    //     result++;
    //   }
    // }
    // console.log(     result)
  }

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (grid[i][j] == 1 && !visited[i][j]) {
        max = Math.max(dfs(i,j),max)
      }
    }
  }

  return max;
};

const input = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1],
];

maxAreaOfIsland(input);
