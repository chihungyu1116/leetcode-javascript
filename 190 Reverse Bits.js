// Leetcode #190
// Language: Javascript
// Problem: https://leetcode.com/problems/reverse-bits/
// Author: Chihung Yu
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var result =  0;
    
    for(var i = 0; i < 31; i++){
        result <<= 1;
        result |= n & 1;

        n >>>= 1;
        console.log(result, n);
    }
    
    return Math.abs(result);
};

console.log(reverseBits(4294967295));