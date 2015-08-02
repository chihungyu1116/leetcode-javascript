// Leetcode #171
// Language: Javascript
// Problem: https://leetcode.com/problems/excel-sheet-column-number/
// Author: Chihung Yu
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var total = 0;
    var len = s.length;
    var base = 26;
    
    for(var i = 0; i < len; i++){
        var pow = len - i - 1;
        var num = getNumber(s[i]);
        
        total += Math.pow(base,pow)*num;
    }
    
    return total;
};

var getNumber = function(c){
    var charCodeOfA = 'A'.charCodeAt(0);
    var charCodeOfTarget = c.charCodeAt(0);
    
    return charCodeOfTarget - charCodeOfA + 1;
};
