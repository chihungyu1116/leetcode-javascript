/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(m === 0 || n === 0){
        return 0;
    }
    
    var dp = [[1]];
    
    
    for(var i = 1; i < n; i++){
        dp[0][i] = 1;
    }
    
    for(var j = 1; j < m; j++){
        dp.push([]);
        dp[j][0] = 1;
    }
    
    for(i = 1; i < m; i++){
        for(j = 1; j < n; j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }   
    
    console.log(dp);
    
    return dp[m-1][n-1];
}

// This solution uses Dinamic Programming
var uniquePaths3 = function(m, n) {
  var matrix = [];
  for(var i = 0; i < m; i++) {
    matrix[i] = [];
    for(var j = 0; j < n; j++) {
      if(i == 0 || j == 0) {
        matrix[i][j] = 1;
      } else{
        matrix[i][j] = 0;   
      }
    }
  }
  
  for(var row = 1; row < m; row++) {
    for(var col = 1; col < n; col++) {
      matrix[row][col] = matrix[row - 1][col] + matrix[row][col - 1]
    }
  }
   return matrix[m - 1][n - 1];
};
