/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const visit = new Set();
  const track = new Map();

  for (let i = 0; i < numCourses; i++) {
    track.set(i, []);
}

  for (let [crs, pre] of prerequisites) {
    track.get(crs).push(pre);
  }

  function dfs(index) {
    if (visit.has(index)) {
      return false;
    }
    if (track.get(index) == []) {
      return true;
    }
    visit.add(index)
    for (let i of track.get(index)) {
        if(!dfs(i)){
            return false
        }
    }
    visit.delete(index)
    track.set(index,[])
    return true;
  }

  for(let i=0;i<numCourses;i++){
      if(!dfs(i)){
          return  false
      }
  }
  return true
};

console.log(
  canFinish(5, [
    [1, 4],
    [2, 4],
    [3, 1],
    [3, 2],
  ])
);
