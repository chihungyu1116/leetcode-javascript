// Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

// For example,
// Given n = 3,

// You should return the following matrix:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]
// Hide Tags Array
// Hide Similar Problems (M) Spiral Matrix



/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    var matrix = [];
    for(var i = 0; i < n; i++) {
        matrix.push([]);
    }
    var x = 0;
    var y = 0;
    var count = 1;
    
    while(0 < n) {
        if(n === 1) {
            matrix[x][y] = count;
            break;
        }
        
        for(i = 0; i < n - 1; i++) {
            matrix[x][y++] = count++;
        }
        
        for(i = 0; i < n - 1; i++) {
            matrix[x++][y] = count++;
        }
        
        for(i = 0; i < n - 1; i++) {
            matrix[x][y--] = count++;
        }
        
        for(i = 0; i < n - 1; i++) {
            matrix[x--][y] = count++;
        }
        
        x++;
        y++;
        n -= 2;
    }
    
    return matrix;
};