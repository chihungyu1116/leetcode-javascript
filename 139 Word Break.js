// Leetcode #139
// Language: Javascript
// Problem: https://leetcode.com/problems/word-break/
// Author: Chihung Yu
/**
 * @param {string} s
 * @param {set<string>} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if(wordDict === null || wordDict.size === 0){
        return false;
    }
    
    var t = [];
    t[0] = true;
  
    for(var i = 0; i<s.length; i++){
        if(t[i]){
            for(var j = i+1; j <= s.length; j++){
                var str = s.substring(i,j);
                
                if(wordDict.has(str)){
                    t[j] = true;    
                }
            }    
        }
    }
    
    return t[s.length] === true;
  
}