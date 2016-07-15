// Implement atoi to convert a string to an integer.

// Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

// Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var num = 0;
    var baseCharCode = '0'.charCodeAt(0);
    var sign = 1;
    
    str = str.trim();
    
    if(str[0] === '+' || str[0] === '-') {
        
        if(str[0] === '-') {
            sign = -1;
        }
        
        str = str.substring(1);
    }
    
    for(var i = 0; i < str.length; i++) {
        var c = str[i];
        var charCode = c.charCodeAt(0) - baseCharCode;
        
        if(0 <= charCode && charCode <= 9) {
            num *= 10;
            num += charCode;
        } else {
            break;
        }
    }
    
    var maxInt = Math.pow(2,31) - 1;
    var minNegInt = -Math.pow(2,31);
    
    num = sign*num;
    
    if(0 < num && maxInt < num) {
        return maxInt;
    }
    
    if(num < 0 && num < minNegInt) {
        return minNegInt;
    }
    
    return num;
};