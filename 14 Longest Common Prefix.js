/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    var result = "";
    
    if(strs === null || strs.length === 0){
        return result;
    }
    
    var minLen = Infinity;
    
    for(var i = 0; i < strs.length; i++){
        if(strs[i].length < minLen){
            minLen = strs[i].length;
        }
    }
    var strIndex = 0;
    var arrIndex = 1;
    
    
    for(var x = 0; x < minLen; x++){
        for(var y = 0; y < strs.length; y++){
            if(strs[0][x] !== strs[y][x]){
                return strs[0].substring(0,x);
            }
        }
    }
  
    return strs[0].substring(0, minLen);  
};