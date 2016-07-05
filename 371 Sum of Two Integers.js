// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

// Example:
// Given a = 1 and b = 2, return 3.

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while(b !== 0) {
        
        // 100
        // 101
        
        // carry = a&b and carry << 1 will give 1 in the front
        // a^b will give 001 which is addition.
        // b now will become 1000 and we just need to do this one more time then we get the answer.
        var carry = a & b;
        a ^= b;
        b = carry << 1;
    }
    
    return a;
};