/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var row = matrix.length;
    
    if(row === 0) {
        return false;
    }
    
    var col = matrix[0].length;
    
    if(col === 0) {
        return false;
    }
    
    var j = col - 1;
    for(var i = 0; i < row; i++) {
        while(j && matrix[i][j] > target) {
            j--;
        }
        if(matrix[i][j] === target) {
            return true;
        }
    }
    return false;
};