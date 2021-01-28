var exist = function(board, word) {
    let m = board.length;
    let n = board[0].length;

    var result = false;
    for(var i=0; i<m; i++){
        for(var j=0; j<n; j++){
           if(dfs(board,word,i,j,0)){
               result = true;
           }
        }
    }
    
    return result;
};

var dfs = function(board, word,i,j,k){
    let m = board.length;
    let n = board[0].length;
    
     if(i<0 || j<0 || i>=m || j>=n){
        return false;
    }
    
     if(board[i][j] == word.charAt(k)){
        let temp = board[i][j];
        board[i][j]='#';
        if(k==word.length-1){
            return true;
        }else if(dfs(board, word, i-1, j, k+1)
        ||dfs(board, word, i+1, j, k+1)
        ||dfs(board, word, i, j-1, k+1)
        ||dfs(board, word, i, j+1, k+1)){
            return true;
        }
        board[i][j]=temp;
    }
 
    return false;
    
}