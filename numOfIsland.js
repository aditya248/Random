/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count =0;
    
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            if(grid[i][j] == "1")
                {
                    count++;
                    callbfs(grid,i,j);
                }
        }
    }
    
    return count;
};

var callbfs = function(grid, i, j) {
    
    if(i<0 || i>=grid.length || j<0 || j>=grid[i].length || grid[i][j]=="0"){
        return;
    }
    
    grid[i][j] = "0";
    
    callbfs(grid, i+1, j);
    callbfs(grid, i, j+1);
    callbfs(grid, i-1, j);
    callbfs(grid, i, j-1);
    
};