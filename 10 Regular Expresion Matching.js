// https://www.youtube.com/watch?v=l3hda49XcDE#t=211.113333

// Implement regular expression matching with support for '.' and '*'.

// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.

// The matching should cover the entire input string (not partial).

// The function prototype should be:
// bool isMatch(const char *s, const char *p)

// Some examples:
// isMatch("aa","a") → false
// isMatch("aa","aa") → true
// isMatch("aaa","aa") → false
// isMatch("aa", "a*") → true
// isMatch("aa", ".*") → true
// isMatch("ab", ".*") → true
// isMatch("aab", "c*a*b") → true


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var m = s.length;
    var n = p.length;
    var dp = [];
    
    for(var i = 0; i <= m; i++) {
        var tmp = [];
        
        for(var j = 0; j <= n; j++) {
            tmp.push(false);
        }
        
        dp.push(tmp);
    }
    
    dp[0][0] = true;
    
    for(i = 0; i <= m; i++) {
        for(j = 0; j <= n; j++) {
            if(p[j-1] !== '.' && p[j-1] !== '*') {
                if(i > 0 && s[i-1] === p[j-1] && dp[i-1][j-1]) {
                    dp[i][j] = true;
                }
            } else if(p[j-1] === '.') {
                if(i > 0 && dp[i-1][j-1]) {
                  dp[i][j] = true;
                }
            } else if(j > 1) { // '*' cannot be the first element      
                if(dp[i][j-2]) { // 0 Occurance
                  dp[i][j] = true;     
                } else if(i > 0 && (p[j-2] == s[i-1] || p[j-2] == '.') && dp[i-1][j]) {

                  // example
                  // xa and xa* 
                  // s[i-1] === a
                  // p[j-2] === a
                  // a === a
                  // so we can now compare x, xa*
                  // and x here is dp[i-1][j]
                    dp[i][j] = true; 
                }
            }
        }
    }
    
    return dp[m][n];
};