// Leetcode #191
// Language: Javascript
// Problem: https://leetcode.com/problems/number-of-1-bits/
// Author: Chihung Yu

// Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).

// For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.

// Credits:
// Special thanks to @ts for adding this problem and creating all test cases.

// Hide Company Tags Microsoft Apple
// Hide Tags Bit Manipulation
// Hide Similar Problems (E) Reverse Bits (E) Power of Two (M) Counting Bits



/**
 * @param {number} n - a positive integer
 * @return {number}
 */

var hammingWeight = function(n) {
    if(n === null){
        return n;
    }
    count = 0;
    
    while(n !== 0){
        n = n & (n-1);
        // use x & (x-1) to determine if an integer is a power of two
        // every time you perform the operation x & (x-1), a single 1 bit is erased
        count++;
    }
    
    return count;
};