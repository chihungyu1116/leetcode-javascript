// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

// For example,
// S = "ADOBECODEBANC"
// T = "ABC"
// Minimum window is "BANC".

// Note:
// If there is no such window in S that covers all characters in T, return the empty string "".

// If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.

// Hide Company Tags LinkedIn Uber Facebook
// Hide Tags Hash Table Two Pointers String
// Hide Similar Problems


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 
// reference: http://www.cnblogs.com/TenosDoIt/p/3461301.html
var minWindow = function(s, t) {
    var lenS = s.length;
    var lenT = t.length;
    var queue = [];
    var tRequireCount = {};
    var tFoundCount = {};
    var hasFound = 0;
    var windowBeg = -1;
    var windowEnd = lenS;
    
    for(var i = 0; i < lenT; i++) {
        // init tFoundCount to all 0s
        tFoundCount[t[i]] = 0;
        // init tRequireCount to count of that character in t
        tRequireCount[t[i]] = tRequireCount[t[i]] || 0;
        tRequireCount[t[i]]++;
    }
  
    for(i = 0; i < lenS; i++) {
        if(tRequireCount[s[i]] > 0) {
            // use queue to skip a lot of redudant character
            // minWindow('aeeeeeebceeeeaeeedcb', 'abc');
            // queue will contain index
            // 1st round: [ 0, 7, 8 ] and then get rid of character at 0
            // 2nd round: [ 7, 8, 13 ] and get rid of character at 7
            // 3rd round: [ 8, 13, 18, 19 ]
            queue.push(i);
            tFoundCount[s[i]]++;
          
            // if found count is over require count, we don't need those extra, so don't record it to hasFound
            if(tFoundCount[s[i]] <= tRequireCount[s[i]]) {
                hasFound++;
            }
            
            // when the current location which is in queue
            if(hasFound === lenT) {
                var k;
              
                do {
                    k = queue.shift();
                    tFoundCount[s[k]]--;
                } while(tFoundCount[s[k]] >= tRequireCount[s[k]]);
                // moving to the minimum window location
              
                if(windowEnd - windowBeg > i - k) {
                    windowBeg = k;
                    windowEnd = i;
                    // window will be in
                    // 1st round 0 8 
                    // 2nd round 7 13
                }

                hasFound--;
            }
        }
    }
    
    return windowBeg !== -1 ? s.substring(windowBeg, windowEnd + 1) : '';
};