/**
 * @param {number[]} digits
 * @return {number[]}
 */

// Time complexity : \mathcal{O}(N)O(N) since it's not more than one pass along the input list.

// Space complexity : \mathcal{O}(1)O(1).
var plusOne = function(digits) {
    var carry = 1;
    for(var i = digits.length - 1; i > -1; i--) {
        var d = digits[i];
        var sum = d + carry;
        if (sum === 10) {
            digits[i] = 0;
            carry = 1;
        } else {
            digits[i] = sum;
            carry = 0; // can directly return since it will not trigger the carry unshift at the end.
            break;
        }
    }
    
    if (carry === 1) {
        digits.unshift(carry);
    }
    
    return digits;
};




var plusOne = function(digits) {
    for(var i = digits.length; i--;){
        digits[i] = 1 + digits[i];
        
        if(digits[i] === 10){
            digits[i] = 0;
        } else {
            return digits;
        }
    }
    
    digits.unshift(1);
    
    
    return digits;
};