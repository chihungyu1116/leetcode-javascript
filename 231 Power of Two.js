// Leetcode #231 
// Language: Javascript
// Problem: https://leetcode.com/problems/power-of-two/
// Author: Chihung Yu
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n <= 0 ? false : (n & (n-1)) === 0;
};