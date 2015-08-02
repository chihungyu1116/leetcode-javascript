/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var lenA = a.length;
    var lenB = b.length;
    var carry = 0;
    var result = '';
    var maxLen = Math.max(lenA, lenB);
    
    for(var i = 0; i < maxLen; i++){
        
        var p = parseInt(a[lenA - i - 1] || '0');
        var q = parseInt(b[lenB - i - 1] || '0');
    
        var tmp = p + q + carry;
        result = tmp%2 + result;
        carry = parseInt(tmp/2);
    }
    
    return (carry === 0) ? result : '1' + result;
};