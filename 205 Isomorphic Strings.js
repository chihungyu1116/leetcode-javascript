// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

// For example,
// Given "egg", "add", return true.

// Given "foo", "bar", return false.

// Given "paper", "title", return true.

// Note:
// You may assume both s and t have the same length.

// Hide Company Tags LinkedIn
// Hide Tags Hash Table
// Hide Similar Problems (E) Word Pattern



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    
    var hash1 = {};
    var hash2 = {};
    
    for(var i = 0; i < s.length; i++) {
        hash1[s[i]] = t[i];
        hash2[t[i]] = s[i];
    }
    
    var result1 = '';
    var result2 = '';
    
    for(i = 0; i < s.length; i++) {
        result1 += hash1[s[i]];
        result2 += hash2[t[i]];
    }
    
    return result1 === t && result2 === s;
};