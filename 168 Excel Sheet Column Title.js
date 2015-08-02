// Leetcode #168
// Language: Javascript
// Problem: https://leetcode.com/problems/excel-sheet-column-title/
// Author: Chihung Yu
/**
 * @param {number} n
 * @return {string}
 */
 
var getLetter = function(num){
    return String.fromCharCode(num + 'A'.charCodeAt(0));
} 

var convertToTitle = function(n) {
    var result = "";
    var base = 1;
    
    while(n > 0){
        n--; // [!!!] key
        rem = n%26;
        result = getLetter(rem) + result;
        n = parseInt(n/26);
    }
  
    return result;
};