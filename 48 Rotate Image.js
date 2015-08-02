/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    if(matrix === null || matrix.length === 0){
        return;
    }
 
    var len = matrix.length;
    
    for(var i = 0; i < len - 1; i++){
        for(var j = 0; j < len - i; j++){
            swap(matrix,i,j,len-1-j,len-1-i);
        }
    }
    
    for(i = 0; i < parseInt(len/2); i++){
        for(j = 0; j < len; j++){
            swap(matrix,i,j,len-1-i,j);
        }
    }
};

var swap = function(matrix,x1,y1,x2,y2){
    var temp = matrix[x1][y1];
    matrix[x1][y1] = matrix[x2][y2];
    matrix[x2][y2] = temp;
}