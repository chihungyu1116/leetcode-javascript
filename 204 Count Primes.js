// Description:

// Count the number of prime numbers less than a non-negative number, n.

// Leetcode #204
// Language: Javascript
// Problem: https://leetcode.com/problems/count-primes/
// Author: Chihung Yu
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n <= 2){
        return 0;
    }

    var mem = [];
    
    for(var i = 2; i < n; i++){
        mem[i] = true;
    }
    
    sq = parseInt(Math.sqrt(n - 1));

    for(i = 2; i <= sq; i++){
        if(mem[i]){
            for(var j = i + i; j < mem.length; j += i){
                mem[j] = false;
            }
        }
    }

    var count = 0;
    for(i = 2; i < mem.length; i++){
        if(mem[i]){
            count++;    
        }
    }
    
    return count;
}