// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Follow up:
// Could you do this in-place?

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var row = matrix.length;
    
    if(row === 0) {
        return;
    }
    
    var col = matrix[0].length;
    
    // swap them in diagonal
    for(var i = 0; i < row; i++) {
        for(var j = 0; j < col - i; j++) {
            swap(matrix, i, j, row - 1 - j, col  - 1 - i);
        }
    }
    
    // swap in middle
    for(i = 0; i < Math.floor(row/2); i++) {
        for(j = 0; j < col; j++) {
            swap(matrix, i, j, row - 1 - i, j);
        }
    }
};

function swap(matrix, x1, y1, x2, y2) {
    var tmp = matrix[x1][y1];
    matrix[x1][y1] = matrix[x2][y2];
    matrix[x2][y2] = tmp;
}