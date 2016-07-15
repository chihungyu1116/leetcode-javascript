// Given a string, determine if a permutation of the string could form a palindrome.

// For example,
// "code" -> False, "aab" -> True, "carerac" -> True.


/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    var countMap = {};
    
    for(var i = 0; i < s.length; i++) {
        var c = s[i];
        
        countMap[c] = countMap[c] || 0;
        countMap[c]++;
    }
    var oddCount = 0;
    
    for(i in countMap) {
        if(countMap[i]%2 === 1) {
            oddCount++;
        }
    }
    
    return oddCount < 2;
};

// Solution (2) that assume it's ascii 256 chars only

var canPermutePalindrome = function(s) {
    // assume that s is only contact 256 english letters
    var letters = Array(256).fill(0);
    var odd = 0;
    for(var i = 0; i < s.length; i++) {
        var letterIndex = s[i].charCodeAt(0);
        odd += (++letters[letterIndex] & 1) === 1 ? 1 : -1;
    }
    return odd < 2;
};