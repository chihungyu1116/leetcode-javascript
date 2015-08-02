// Leetcode #242 
// Language: Javascript
// Problem: https://leetcode.com/problems/valid-anagram/
// Author: Chihung Yu
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if((s === null || t === null) || (s.length !== t.length)){
        return false;
    }
    
    var hash = {};
    
    for(var i = 0; i < s.length; i++){
        hash[s[i]] = hash[s[i]] || 0;
        hash[s[i]]++;
    }
    
    for(var j = 0; j < t.length; j++){
        if(!hash[t[j]]){
            return false;
        }
        
        hash[t[j]]--;
    }
    
    return true;
};