/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid === null || obstacleGrid.length === 0 || obstacleGrid[0].length === 0){
        return 0;
    }
    
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    
    if(m === 0 || n === 0){
        return 0;
    }
    
    if(obstacleGrid[0][0] === 1){
        return 0;
    }
    
    var dp = [[1]];
    
    for(var i = 1; i < n; i++){
        if(obstacleGrid[0][i] === 1){
            dp[0][i] = 0;
        } else if(dp[0][i-1] === 0){
            dp[0][i] = 0;
        } else{
            dp[0][i] = 1;
        }
    }
    
    for(var j = 1; j < m; j++){
        dp.push([]);
        if(obstacleGrid[j][0] === 1){
            dp[j][0] = 0;
        } else if(dp[j-1][0] === 0){
            dp[j][0] = 0;
        } else {
            dp[j][0] = 1;
        }
    }
    
    for(i = 1; i < m; i++){
        for(j = 1; j < n; j++){
            if(obstacleGrid[i][j] === 1){
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];    
            }
        }
    }   
    
    return dp[m-1][n-1];
};