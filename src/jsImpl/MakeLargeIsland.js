class Disjoint{
    rank = []
    parent = []
    size = []
    constructor(n){
        for (let i = 0; i < n * n; i++) {
            this.rank.push(0);
            this.parent.push(i);
            this.size.push(1);
        }
    }

    findParent(node) {
        if (node !== this.parent[node]) {
            this.parent[node] = this.findParent(this.parent[node]); 
        }
        return this.parent[node];
    }

    unionByRank(u,v){
        let ulp_u = this.findParent(u)
        let ulp_v = this.findParent(v)
        if(this.rank[ulp_u] < this.rank[ulp_v]){
            this.parent[ulp_u] = ulp_v
        
        }
        else if(this.rank[ulp_v] < this.rank[ulp_v]){
            this.parent[ulp_v] = ulp_u
        }
        else{
            this.parent[ulp_v]  = ulp_u
            this.rank[ulp_u]++
        }
    }

     unionBySize(u, v) {
        let ulp_u = this.findParent(u);
        let ulp_v = this.findParent(v);
        if (ulp_u == ulp_v) return;
        if (this.size[ulp_u] < this.size[ulp_v]) {
            this.parent[ulp_u] =  ulp_v;
            this.size[ulp_v]  = this.size[ulp_v] + this.size[ulp_u];
        } else {
            this.parent[ulp_v] =  ulp_u;
            this.size[ulp_u] =  this.size[ulp_u] + this.size[ulp_v]
        }
    }
}


/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {

    function isValid( newr,  newc,  n) {
        return newr >= 0 && newr < n && newc >= 0 && newc < n;
    }

    const n = grid[0].length
    const disjoint = new Disjoint(n*n);
    for(let row =0 ;row<n;row++){
        for(let col = 0 ;col<n;col++){
            if(grid[row][col] == 0) continue
            const dr = [-1,0,1,0]
            const dc = [0,-1,0,1]
            for(let ind =0 ; ind<4;ind++){
                let nr = row + dr[ind]
                let nc = col+ dc[ind]
                if(isValid(nr,nc,n) && grid[nr][nc] == 1){
                    let node = row * n + col
                    let adjnode = nr * n + nc
                    disjoint.unionBySize(node,adjnode)
                }
            }
        }
    }

    var mx = 0


    for(let row =0 ;row<n;row++){
        for(let col = 0 ;col<n;col++){
            if(grid[row][col] == 1) continue
            const dr = [-1,0,1,0]
            const dc = [0,-1,0,1]
            var component = new Set()
            for(let ind =0 ; ind<4;ind++){
                let nr = row + dr[ind]
                let nc = col+ dc[ind]
                if(isValid(nr,nc,n)){
                    if(grid[nr][nc] == 1){
                        component.add(disjoint.findParent((nr*n)+nc))
                    }
                }
            }
            let sizetotal = 0
            for(let i of component){
                sizetotal += disjoint.size[i]
            }

            mx = Math.max(mx, sizetotal+1)

        }
    }
 
    for (let cellNo = 0; cellNo < n * n; cellNo++) {
        mx = Math.max(mx, disjoint.size[disjoint.findParent(cellNo)]);
    }

    return mx;
    
};