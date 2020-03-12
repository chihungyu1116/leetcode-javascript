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

//Clearer Solution
var rotate = function(matrix) {
    rotateColumns(matrix);
    rotateEachDiagonal(matrix);
};

var rotateColumns = function(matrix) {
    for(var j = 0; j < matrix.length; j++) {
        var low = 0;
        var ceil = matrix.length -1;
        while(low < ceil) {
            swap(matrix, low, j, ceil, j);
            low++;
            ceil--;
        }
    }
};

var rotateEachDiagonal = function(matrix){
    for(var i = 0; i < matrix.length; i++) {
        for(var j = i; j < matrix.length; j++) {
            swap(matrix, i, j, j, i);
        }
    }
};

var swap = function(matrix, i1, j1, i2, j2) {
    var aux = matrix[i1][j1];
    matrix[i1][j1] = matrix[i2][j2];
    matrix[i2][j2] = aux;
};




/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    rotateDiagonal(matrix);
    rotateRow(matrix);
};

var swap = function(matrix, x1, y1, x2, y2) {
    var temp = matrix[x1][y1];
    matrix[x1][y1] = matrix[x2][y2];
    matrix[x2][y2] = temp;
}

var rotateRow = function(matrix) {
    for(var i = 0; i < matrix.length; i++) {
        var row = matrix[i];
        var start = 0;
        var end = matrix[i].length - 1;
        
        while(start < end) {
            swap(matrix, i, start, i, end);
            start++;
            end--;
        }
    }
}

var rotateDiagonal = function(matrix) {
    for(var i = 0; i < matrix.length; i++) {
        for(var j = i; j < matrix.length; j++) {
            swap(matrix, i, j, j, i);
        }
    }
}