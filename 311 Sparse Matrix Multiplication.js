// Given two sparse matrices A and B, return the result of AB.

// You may assume that A's column number is equal to B's row number.

// Example:

// A = [
//   [ 1, 0, 0],
//   [-1, 0, 3]
// ]

// B = [
//   [ 7, 0, 0 ],
//   [ 0, 0, 0 ],
//   [ 0, 0, 1 ]
// ]


//      |  1 0 0 |   | 7 0 0 |   |  7 0 0 |
// AB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |
//                   | 0 0 1 |
// Hide Company Tags LinkedIn Facebook
// Hide Tags Hash Table


/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */

// normal matrix mulitplication
// slower version
var multiply = function(A, B) {
    var result = [];

    var rowA = A.length;
    var colA = A[0].length;
    var rowB = B.length;
    var colB = B[0].length

    for(var i = 0; i < rowA; i++) {
        result.push(Array(colB).fill(0));
        
        for(var j = 0; j < colB; j++) {
            
            for(var k = 0; k < colA; k++) {
                result[i][j] += A[i][k]*B[k][j]    
            }
            
        }
    }
    
    return result;
};

// faster
// skip
multiply = function(A, B) {
    var result = [];
    var i,j,k;

    var rowA = A.length;
    var colA = A[0].length;
    var colB = B[0].length

    for(var i = 0; i < rowA; i++) {
        result.push(Array(colB).fill(0));
    }

    for(i = 0; i < rowA; i++) {
        for(k = 0; k < colA; k++) {
            if(A[i][k] !== 0) {
                for(j = 0; j < colB; j++) {
                    if(B[k][j] !== 0) {
                        result[i][j] += A[i][k]*B[k][j];
                    }
                }    
            }
        }
    }
    
    return result;
};



// var data1 = [[0,1],[0,0],[0,1]];
// var data2 = [[1,0],[1,0]];

// var data1 = [[1,0,0],[-1,0,3]];
// var data2 = [[7,0,0],[0,0,0],[0,0,1]];

var data1 = [[1,-5]];
var data2 = [[12],[-1]];

console.log(multiply(data1,data2));