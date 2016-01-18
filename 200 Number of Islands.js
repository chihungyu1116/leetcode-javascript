/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var count = 0;
    
    var rows = grid.length;
    
    if(rows === 0){
        return count;
    }
    
    var cols = grid[0].length;
    
    if(cols === 0) {
        return count;
    }
    
    for(i = 0; i < rows; i++) {
        for(var j = 0; j < cols; j++) {
            if(grid[i][j] === "1") {
                count++;
                 walk(grid, i, j, rows, cols);
            }
        }
    }
    return count;
};

var walk = function(grid, x, y, rows, cols) {
    if(grid[x][y] === "1") {
        grid[x][y] = "0";    
    }

    if((x + 1) < rows && grid[x+1][y] === "1") {
        walk(grid, x + 1, y, rows, cols);    
    }
    
    if((x - 1) >= 0 && grid[x-1][y] === "1") {
        walk(grid, x - 1, y, rows, cols);    
    }
    
    if((y + 1) < cols && grid[x][y+1] === "1") {
        walk(grid, x, y + 1, rows, cols);    
    }
    
    if((y - 1) >= 0 && grid[x][y-1] === "1") {
        walk(grid, x, y - 1, rows, cols);    
    }
}