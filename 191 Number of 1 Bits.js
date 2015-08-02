// Leetcode #191
// Language: Javascript
// Problem: https://leetcode.com/problems/number-of-1-bits/
// Author: Chihung Yu
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