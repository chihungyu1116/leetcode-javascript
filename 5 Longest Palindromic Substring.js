// Given a string S, find the longest palindromic substring in S. You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.
// Amazon Microsoft Bloomberg
// Show Tags
// Show Similar Problems

/**
 * @param {string} s
 * @return {string}
 */



var longestPalindrome = function(s) {
    if(s === null || s.length === 0){
        return "";
    }    
    
    var result = "";

    // The reason to multiply by 2 is because 
    // Palindrome can be in two forms
    // 1. abba There will be case which center has two idenitical charachter,
    //   And there will be maximum 2*n - 1 such case
    // 2. aba There will be case which center has only one character
    var len = 2*s.length - 1;
    var left, right;
    
    for(var i = 0; i < len; i++){
        left = right = parseInt(i/2);
        if(i%2 === 1){
            right++;
        }
        
        var str = expandFromCenterAndCheckForPalindrome(s,left,right);
        
        if(str.length > result.length){
            result = str;
        }
    }
    return result;
};


// other implementation

var longestPalindrome = function(s) {
    if(s === null || s.length === 0){
        return "";
    }    
    
    var result = "";
    var len = s.length;
    var left, right;
    
    for(var i = 0; i < len; i++){
        left = right = i;

        var str = expandFromCenterAndCheckForPalindrome(s,left,right);
        if(str.length > result.length){
            result = str;
        }
        var str = expandFromCenterAndCheckForPalindrome(s,left,right + 1);
        if(str.length > result.length){
            result = str;
        }
    }
    return result;
};



var expandFromCenterAndCheckForPalindrome = function(s, left, right){
    // in the case where left !== right
    // that's the case "abba"
    // which it checks for if b === b then a === a

    // in the case where left === right
    // that's the case "aba"
    // which it check if b === b as left === right
    // then a === a 
    while(left >= 0 && right < s.length && s[left] === s[right]){
        left--;
        right++;
    }
    
    return s.substring(left+1, right);
}