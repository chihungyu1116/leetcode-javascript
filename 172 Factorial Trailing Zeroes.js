// Leetcode #172
// Language: Javascript
// Problem: https://leetcode.com/problems/factorial-trailing-zeroes/
// Author: Chihung Yu
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    if(n < 0){
        return -1;
    }
    
    var count = 0;
    
    while(n>=5){
        var rem = parseInt(n/5);
        count += rem;
        n = rem;
    }
    
    return count;
};