/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s === null || s.length === 0){
        return 0;
    }
    
    var count = 0;
    
    for(var i = s.length; i--;){
        if(s[i] === ' '){
            if(count === 0){
                continue;
            } else {
                return count;
            }
        }
        
        count++;
    }
    
    return count;
};