// Given two numbers represented as strings, return multiplication of the numbers as a string.

// Note:
// The numbers can be arbitrarily large and are non-negative.
// Converting the input string to integer is NOT allowed.
// You should NOT use internal library such as BigInteger.
// Hide Company Tags Facebook Twitter
// Hide Tags Math String
// Hide Similar Problems (M) Add Two Numbers (E) Plus One (E) Add Binary

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 === null || num2 === null || num1.length === 0 || num2.length === 0 || num1 === '0' || num2 === '0') {
        return '0';
    }
    
    var arr1 = num1.split('').reverse();
    var arr2 = num2.split('').reverse();
    var result = [];
    
    for(var i = 0; i < arr1.length; i++) {
        var carry = 0;
        var val1 = parseInt(arr1[i]);
        
        for(var j = 0; j < arr2.length; j++) {
            var val2 = parseInt(arr2[j]);
            var product = val1*val2 + carry;
            var exist = result[i+j] || 0;
            var sum = product + exist;
            var digit = sum%10;
            carry = Math.floor(sum/10);
            result[i+j] = digit;
        }
        
        if(carry > 0) {
            result[i+j] = carry;
        }
    }
    
    result.reverse();
    result = result.join('');
    
    return result;
};

multiply('123', '456')