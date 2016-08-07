// Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// For example, given the following matrix:

// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0
// Return 4.
// Credits:
// Special thanks to @Freezen for adding this problem and creating all test cases.

// Hide Company Tags Apple Airbnb Facebook
// Hide Tags Dynamic Programming
// Hide Similar Problems (H) Maximal Rectangle


/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    var dp = [];
    var ans = 0;
    
    for(var i = 0; i < matrix.length; i++) {
        var arr = Array(matrix[i].length).fill(0);
        dp.push(arr);
    }
    
    for(var x = 0; x < matrix.length; x++) {
        for(var y = 0; y < matrix[x].length; y++) {
            dp[x][y] = parseInt(matrix[x][y]);
            
            // conditions to make sure that x !== 0 && y !== 0 && dp[x][y] !== 0
            // dp[x][y] is the current position
            // if the current position is not 1 then it cannot form square from previous values
            // and if matrix[x][y] is 0, then it will next dp[x+1][y+1] becomes zero plus one, since x+1 and y+1 will become the new start of the square.
            if(x && y && dp[x][y]) {
                dp[x][y] = Math.min(dp[x - 1][y - 1], dp[x - 1][y], dp[x][y - 1]) + 1;
            }
            
            ans = Math.max(ans, dp[x][y]);
        }
    }
    
    return Math.pow(ans, 2);
};

var matrix = ["1111","1111","1111"];
// dp becomes
// 1111
// 1222
// 1233

console.log(maximalSquare(matrix));