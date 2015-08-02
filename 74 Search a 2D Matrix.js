/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function(matrix, target) {
    if(matrix === null || matrix.length === 0 || matrix[0].length === 0){
        return false;
    }
    
    if(target < matrix[0][0]){ // Key base condition
        return false;
    }
    
    var rows = matrix.length - 1;
    var cols = matrix[0].length - 1;
    
    if(target > matrix[rows][cols]){ // Key base condition
        return false;
    }
    
    var start = 0;
    var end = rows;
    while(start <= end){
        var mid = start + parseInt((end - start)/2);
        if(matrix[mid][0] === target){
            return true;
        } else if(matrix[mid][0] < target){
            start = mid + 1;
        } else { // Utilize else rather than define all conditions
            end = mid - 1;
        }
    }    
    
    var targetRow = end;
    start = 0;
    end = cols ;
        
    while(start <= end){
        mid = start + parseInt((end - start)/2);
        
        if(matrix[targetRow][mid] === target){
            return true;
        } else if(matrix[targetRow][mid] < target){
            start = mid + 1;
        } else { // Utilize else rather than define all conditions
            end = mid - 1;
        }
    }
    return false;
};