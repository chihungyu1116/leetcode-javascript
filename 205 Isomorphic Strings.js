// Leetcode #205
// Language: Javascript
// Problem: https://leetcode.com/problems/isomorphic-strings/
// Author: Chihung Yu
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s === null || t === null){
        return true;
    }
    
    var hash1 = {};
    var hash2 = {};
    
    for(var i = 0; i < s.length; i++){
        var sc = s[i];
        var tc = t[i];
        
        hash1[sc] = tc;
        hash2[tc] = sc;
    }
    
    var result1 = "";
    var result2 = "";
    
    for(i = 0; i < s.length; i++){
        sc = s[i]
        tc = t[i];
        result1 += hash1[sc];
        result2 += hash2[tc];
    }
    
    return result1 === t && result2 === s;
};