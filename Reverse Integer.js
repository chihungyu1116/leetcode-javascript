/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var isNeg = x < 0;
    var result = 0;
    
    x = Math.abs(x);
    
    while(x) {
        var lastDigit = x%10;
        result *= 10;
        result += lastDigit;
        x = parseInt(x/10);
    }

    result = isNeg ? -result : result;
    
    if(result > Math.pow(2,31) - 1 || result < -Math.pow(2,31)) {
        return 0;
    }
    
    return result;
};