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