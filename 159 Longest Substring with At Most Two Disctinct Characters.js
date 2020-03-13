// https://segmentfault.com/a/1190000003790746

/**
 * @param {string} s
 * @return {number}
 */

 // Time O(N)
 // Space O(1)
var lengthOfLongestSubstringTwoDistinct = function(s) {
    var longestSubstr = "";
    var maxLength = 0;
    var start = 0;
    var map = new Map();
    
    for(var i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        
        // if map already contains two distrinct chars and the char is new to the map
        if(map.size > 1 && map.get(c) === undefined) {
            // Calc substring len before the new char
            if(i - start > maxLength) {
                // Should not include i, since i is the new distinct char's index
                longestSubstr = s.substring(start, i);
                maxLength = longestSubstr.length;
            }
            // Find the left most char
            var leftMost = s.length;            
            map.forEach((charIdx, key)=> {
                if(charIdx < leftMost) {
                    leftMost = charIdx;
                }
            });
                      
            start = leftMost + 1;
            map.delete(s[leftMost]);
        }
        
        map.set(c, i);
    }
    
    if(s.length - start > maxLength) {
        longestSubstr = s.substring(start, s.length);
        maxLength = longestSubstr.length;
    }
    
    return maxLength;
};




/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    var map = new Map();
    var start = 0;
    var maxLen = 0;
    
    for(var i = 0; i < s.length; i++) {
        var c = s[i];
        if (map.size === 2 && map.get(c) === undefined) {
            var curStr;
            if (i - start > maxLen) {
                maxLen = i - start;
            }
            var leftMost = s.length;
            map.forEach((charIdx, key) => {
                if (charIdx < leftMost) {
                    leftMost = charIdx;
                }            
            });
            start = leftMost + 1;
            map.delete(s[leftMost]);
        }
        
        map.set(c, i);
    }
    
    if (s.length - start > maxLen) {
        maxLen = s.length - start;
    }
    
    return maxLen;
};