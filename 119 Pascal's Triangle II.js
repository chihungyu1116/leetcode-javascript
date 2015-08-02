// Leetcode 119
// Language: Javascript
// Problem: https://leetcode.com/problems/pascals-triangle-ii/
// Author: Chihung Yu
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === null || rowIndex < 0){
        return [];
    }
    
    var result = [1];
    
    for(var i = 1; i <= rowIndex; i++){
        var cur = [];
        
        for(var j = 0; j <= i; j++){
            cur[j] = (result[j - 1] || 0) + (result[j] || 0);
        }

        result = cur;
    }
    
    return result;
};