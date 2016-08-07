// Given two binary strings, return their sum (also a binary string).

// For example,
// a = "11"
// b = "1"
// Return "100".

// Hide Company Tags Facebook
// Hide Tags Math String
// Hide Similar Problems (M) Add Two Numbers (M) Multiply Strings (E) Plus One


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var lenA = a.length;
    var lenB = b.length;
    var ai = 0;
    var bi = 0;
    var sum = '';
    var carry = 0;
    while(ai < lenA || bi < lenB) {
        var valA = ai < lenA ? parseInt(parseInt(a[lenA - 1 - ai])) : 0;
        var valB = bi < lenB ? parseInt(parseInt(b[lenB - 1 - bi])) : 0;
        var val = valA + valB + carry;
        var rem = val%2;
        carry = val > 1 ? 1 : 0; 
        sum = rem + sum;
        ai++;
        bi++;
    }
    
    return carry > 0 ? carry + sum : sum;
};