// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// 11110
// 11010
// 11000
// 00000
// Answer: 1

// Example 2:

// 11000
// 11000
// 00100
// 00011
// Answer: 3
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var visited = [];
    var row = grid.length;
    
    if(!grid || row === 0) {
        return 0;
    }
    
    var col = grid[0].length;
    var count = 0;
    for(var i = 0; i < row; i++) {
        for(var j = 0; j < col; j++) {
            if(grid[i][j] === '1') {
                count++;
                traverse(i, j, grid, row, col);    
            }
        }
    }
    
    return count;
};

var traverse = function(i, j, grid, row, col) {
    if((0 <= i &&  i < row) && (0 <= j && j < col) && grid[i][j] === '1') {
        grid[i][j] = '2';
    
        
        traverse(i + 1, j, grid, row, col);
        traverse(i, j + 1, grid, row, col);
        traverse(i - 1, j, grid, row, col);
        traverse(i, j - 1, grid, row, col);
    }
}

// non recusion
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var count = 0;
    
    function traverseIsland(i, j, grid) {
        var stack = [];
        
        stack.push([i, j]);
        
        while(stack.length) {
            var pair = stack.pop();
            i = pair[0];
            j = pair[1];
            
            if(i >= 0 && i < grid.length && j >= 0 && j < grid[0].length && grid[i][j] === '1') {
                grid[i][j] = '2';
                stack.push([i + 1, j]);
                stack.push([i - 1, j]);
                stack.push([i, j + 1]);
                stack.push([i, j - 1]);
            }
        }
    }
    
    for(var i = 0; i < grid.length; i++) {
        for(var j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === '1') {
                traverseIsland(i, j, grid);
                count++;
            }
        }
    }
    
    return count;
};