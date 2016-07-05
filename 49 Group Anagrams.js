// Given an array of strings, group anagrams together.

// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], 
// Return:

// [
//   ["ate", "eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note: All inputs will be in lower-case.
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var hash = {};
    
    for(var i = 0; i < strs.length; i++) {
        var str = strs[i];
        
        var key = sort(str);
        
        hash[key] = hash[key] || [];
        hash[key].push(str);
    }
    
    var result = [];
    for(i in hash) {
        result.push(hash[i]);
    }
    
    return result;
};


var sort = function(s) {
    var arr = s.split('');
    
    arr.sort((a,b)=> a > b ? 1 : -1);
    return arr.join('');
}