// Leetcode #231 
// Language: Javascript
// Problem: https://leetcode.com/problems/power-of-two/
// Author: Chihung Yu
// Given an integer, write a function to determine if it is a power of two.

// Credits:
// Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

// Hide Company Tags Google
// Hide Tags Math Bit Manipulation
// Hide Similar Problems (E) Number of 1 Bits (E) Power of Three (E) Power of Four


/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n <= 0 ? false : (n & (n-1)) === 0;
};