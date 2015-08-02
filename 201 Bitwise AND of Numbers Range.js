// Leetcode #201
// Language: Javascript
// Problem: https://leetcode.com/problems/bitwise-and-of-numbers-range/
// Author: Chihung Yu
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 
var rangeBitwiseAnd = function(m, n) {
    while(n > m){
        n = n & (n-1);
    }
    
    return m & n;
};