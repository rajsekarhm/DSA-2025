class Disjoint{
    rank = []
    parent = []
    constructor(n){
        for(let i =1  ;i<=n;i++){
            this.rank.push(0)
            this.parent.push(i)
        }
    }

    findParent(node){
        if(node == this.parent[node]){
            return node
        }
        var ulp = this.findParent(this.parent[node])
        this.parent[node] = ulp
        return this.parent[node];
    }

    unionByRank(u,v){
        let ulp_u = this.findParent(u)
        let ulp_v = this.findParent(v)
        if(this.rank[ulp_u] < this.rank[ulp_v]){
            this.parent[ulp_u] = ulp_v
        
        }
        else if(this.parent[ulp_v] < this.rank[ulp_v]){
            this.parent[ulp_v] = ulp_u
        }
        else{
            this.parent[ulp_v]  = ulp_u
            this.rank[ulp_u]++
        }
    }
}