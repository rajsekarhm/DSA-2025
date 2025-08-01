/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    var closet = []
    points.forEach((ele,inx) => {
        let x = ele[0]
        let y = ele[1]
        var calculated = x * x + y * y
        closet.push([calculated,x,y])
    })
    var result = closet.sort((a,b) => a[0] - b[0])
    return result.slice(0,k).map(([$,x,y]) => [x,y])
};

console.log(kClosest([[3,3],[5,-1],[-2,4]],2))