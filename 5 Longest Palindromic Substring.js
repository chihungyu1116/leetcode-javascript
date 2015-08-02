/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    if(s === null || s.length === 0){
        return "";
    }    
    
    var result = "";
    
    for(var i = (2*s.length) - 1; i--;){
        var left = parseInt(i/2);
        var right = parseInt(i/2);
        if(i%2 === 1){
            right++;
        }
        
        var str = lengthOfPalindrome(s,left,right);
        
        if(str.length > result.length){
            result = str;
        }
    }
    return result;
};


var lengthOfPalindrome = function(s, left, right){
    while(left >= 0 && right < s.length && s[left] === s[right]){
        left--;
        right++;
    }
    
    return s.substring(left+1, right);
}