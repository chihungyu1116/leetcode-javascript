// Leetcode 118
// Language: Javascript
// Problem: https://leetcode.com/problems/pascals-triangle/
// Author: Chihung Yu
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var result = [];
    
    if(numRows <= 0){
        return result;
    }
    
    for(var i = 0; i < numRows; i++){
        var cur = [];
        var pre = i > 0 ? result[i - 1] : [];
        
        for(var j = 0; j <= i; j++){
            if(j === 0){
                cur.push(1);    
            } else if(j === i){
                cur.push(1);
            } else {
                cur.push(pre[j] + pre[j-1]);
            }
        }
        
        result.push(cur);
    }
    
    return result;
};