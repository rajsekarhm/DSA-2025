// var solve = function(board ) {
//     var visited = Array.from({ length: board.length }, () => new Array(board[0].length).fill(false))
    
//     function bfs(i,j){
//         var queue = []
//         queue.push({i:i,j:j})

//         while(queue.length){

//             const {i,j} = queue.pop()
//             const x  = [-1,1,0,0]
//             const y = [0,0,-1,1]
//             for(let k =0 ;k<4;k++){
//                 const nr =  i + x[k]
//                 const nc =  j + y[k]
//                 if(nr>=0 && nc>= 0 && (nr < board.length && nc < board[0].length) && (board[nr][nc] == "O" &&  !visited[nr][nc])){
//                     visited[nr] [nc] = true
//                     queue.push({i:nr,j:nc})
//                 }
//             }
//         }

//     }

//     for(let i =1;i<board.length-1;i++){
//         for(let j=1;j<board[0].length-1;j++){
//             if(board[i][j] == "O" && !visited[i][j]){
//                 bfs(i,j)
//             }
//         }
//     }
//     console.log(visited)
//     return board 
// };


var solve =  function(board){
    let row = board.length, cols = board[0].length
    console.log(row,cols)
    var visited = Array.from({ length: board.length }, () => new Array(board[0].length).fill(false))
    var delcols = [-1,0,1,0]
    var delrows = [0,1,0,-1]
    function dfs(i,j){
        visited[i][j] = true
        for(let k=0;k<4;k++){
            var nr = i + delrows[k]
            var nc =  j + delcols[k]

            if(nr >=0 && nr < row && nc >= 0 && nc < cols && !visited[nr][nc] && board[nr][nc] == "O"){
                dfs(nr,nc)
            }
        }
    }
    for(let  i=0;i<cols;i++){
        if(board[0][i] == "O" && !visited[0][i] ){
            dfs(0,i)
        }
        if(board[row-1][i] == "O" && !visited[row-1][i]){
            dfs(row-1,i)
        }
    }

    for(let  i=0;i<row;i++){
        console.log(i,0)
        if(board[i][0] == "O" && !visited[i][0]){
            dfs(i,0)
        }

        if(board[i][cols-1] == "O" && !visited[i][cols-1] ){
            dfs(i,cols-1)
        }
    }


    for(let i=0;i<row;i++){
        for(let j=0;j<cols;j++){
            if(!visited[i][j] && board[i][j] == "O"){
                board[i][j] = "X"
            }
        }
    }
    return board

}

console.log(solve([["X","O","X","O","X","O"],["O","X","O","X","O","X"],["X","O","X","O","X","O"],["O","X","O","X","O","X"]]))