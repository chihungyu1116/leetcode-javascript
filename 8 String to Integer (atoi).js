/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    
    var val = parseInt(str)
    if(str === null || str.length === 0 || isNaN(val)){
        return 0;
    }
    
    var maxNegInt = -Math.pow(2,31);
    var maxInt = Math.pow(2,31) - 1;
    
    if(val > 0 && val > maxInt){
        return maxInt;
    }
    
    if(val < 0 && val < maxNegInt){
        return maxNegInt;
    }
    
    return val;
};