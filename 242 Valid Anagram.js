// Given two strings s and t, write a function to determine if t is an anagram of s.

// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   var slen = s.length;
   var tlen = t.length;
   
   if(slen !== tlen) {
       return false;
   }
   
   var hash = {};
   
   for(var i = 0; i < slen; i++) {
       var char = s[i];
       hash[char] = hash[char] || 0;
       hash[char]++;
   }
   
   for(i = 0; i < tlen; i++) {
       char = t[i];
       
       if(hash[char] === undefined || hash[char] === 0) {
           return false;
       }
       
       hash[char]--;
   }
   
   return true;
};




/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s === null || t === null || s.length !== t.length) {
        return false;
    }
    
    var hash = {};
    var i; 
    for(i = 0; i < s.length; i++) {
        var sval = s[i];
        var tval = t[i];
        
        if (hash[sval] === undefined) {
            hash[sval] = 0;
        }
        
        if (hash[tval] === undefined) {
            hash[tval] = 0;
        }
        hash[sval]++;
        hash[tval]--;
    }
    
    for(var j in hash) {
        if (hash[j] !== 0) {
            return false;
        }
    }
    
    return true;
};