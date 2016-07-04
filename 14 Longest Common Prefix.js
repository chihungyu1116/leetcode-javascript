/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var len = strs.length;
    var result = '';
    
    if(len === 0) {
        return result;
    }
    
    for(var i = 0; i < strs[0].length; i++) {
        var curChar = strs[0][i];
        
        for(var j = 1; j < len; j++) {
            if(curChar !== strs[j][i]) {
                return result;
            }
            
            if(strs[j].length === i) {
                return result;
            }
        }
        
        result += curChar;
    }
    
    return result;
};