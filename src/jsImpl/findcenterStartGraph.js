var findCenter = function(edges) {
    var resutMap = new Map();
    for(let i =0 ;i<edges.length;i++){
        for(let j=0;j < edges[i].length;j++){
            let res = resutMap.get(edges[i][j]) || 0
            resutMap.set(edges[i][j],res+1)
        }
    }
    var result = 0
    var max = 0
    resutMap.forEach((ele,index) => { 
        if(ele>max){
            max = ele
            result = index
        }
    })
    return index
};

findCenter( [[1,2],[2,3],[4,2]])