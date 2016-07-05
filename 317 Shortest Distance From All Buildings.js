/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function(grid) {
    var rows = grid.length;
    if(rows === 0) {
        return -1;
    }
    
    var cols = grid[0].length;
    // 2D array that records sum distances to all buildings
    var dist = [];
    
    // 2D array that records how many buildings can visit here
    var nums = [];
    
    for(var row = 0; row < rows; row++) {
        dist.push([]);
        nums.push([]);
        
        for(var col = 0; col < cols; col++) {
            dist[row][col] = 0;
            nums[row][col] = 0;
        }
    }
    
    var buildingNum = 0;
    
    for(row = 0; row < rows; row++) {
        for(col = 0; col < cols; col++) {
            if(grid[row][col] === 1) {
                buildingNum++;
                bfs(grid, row, col, dist, nums);
            }
        }
    }  
    
    var min = Infinity;
    
    for(row = 0; row < rows; row++) {
        for(col = 0; col < cols; col++) {
            if(grid[row][col] === 0 && dist[row][col] !== 0 && nums[row][col] === buildingNum) {
                min = Math.min(min, dist[row][col]);
            }
        }
    }
    
    if(min < Infinity) {
        return min;
    }
    
    return -1;
};

function bfs(grid, begCol, begRow, dist, nums) {
    var rows = grid.length;
    var cols = grid[0].length;
    var queue = [];
    queue.push([begRow, begCol]);
    var dirs = [[-1,0],[0,1],[1,0],[0,-1]];
    var level = 0;
    
    // record if location is visited
    var visited = [];
    // init visited to all false
    for(var row = 0; row < rows; row++) {
        visited.push([]);
        for(var col = 0; col < cols; col++) {
            visited[row][col] = false;
        }
    }
     
    while(queue.length !== 0) {
        level++;
        var len = queue.length;
        
        for(var i = 0; i < len; i++) {
            var coords = queue.shift();
            for(var j =0; j < dirs.length; j++) {
                var x = coords[0] + dirs[j][0];
                var y = coords[1] + dirs[j][1];
                
                if(x >= 0 && x < rows && y >= 0 && y < cols && !visited[x][y] && grid[x][y] === 0) {
                    visited[x][y] = true;
                    
                    dist[x][y] += level;
                    nums[x][y]++;
                    queue.push([x,y]);
                }
            }
        }
    }
}


function init2D