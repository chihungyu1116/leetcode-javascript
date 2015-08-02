/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(grid === null || grid.length === 0 || grid[0].length === 0){
        return 0;
    }
    
    var dp = [[]];
    
    dp[0][0] = grid[0][0];
    
    for(var i = 1; i < grid.length; i++){
        dp.push([]);
        dp[i][0] = grid[i][0] + dp[i - 1][0];
    }
    
    for(var j = 1; j < grid[0].length; j++){
        dp[0][j] = grid[0][j] + dp[0][j - 1];
    }
    
    for(i = 1; i < grid.length; i++){
        for(j = 1; j < grid[i].length; j++){
            var val1 = dp[i - 1][j];
            var val2 = dp[i][j - 1];
            
            dp[i][j] = Math.min(val1, val2) + grid[i][j];
        }
    }
    
    return dp[dp.length - 1][dp[0].length - 1];
}