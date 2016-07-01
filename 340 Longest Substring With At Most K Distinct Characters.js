/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    var longestSubstr = "";
    var maxLength = 0;
    var start = 0;
    var map = new Map();
    
    if(k === 0) {
        return 0;
    }
    
    for(var i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        
        // if map already contains two distrinct chars and the char is new to the map
        if(map.size >= k && map.get(c) === undefined) {
            var leftMost = s.length;
              
            // Calc substring len before the new char
            if(i - start > maxLength) {
                // Should not include i, since i is the new distinct char's index
                longestSubstr = s.substring(start, i);
                maxLength = longestSubstr.length;
            }
            
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