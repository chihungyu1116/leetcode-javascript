// Given two strings S and T, determine if they are both one edit distance apart.

// Hide Company Tags Snapchat Uber Facebook Twitter
// Hide Tags String
// Hide Similar Problems (H) Edit Distance


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// tricky question!

var isOneEditDistance = function(s, t) {
  if(s.length > t.length) {
    var tmp = s;
    s = t;
    t = tmp;
  }

  if((t.length - s.length) > 1) {
    return false;
  }

  var found = false;
  
  for(var i = 0, j = 0; i < s.length; i++, j++) {
    if(s[i] !== t[j]) {

      if(found) {
        return false;
      }

      found = true;

      if(s.length < t.length) {
        i--;
      }
    }
  }

  return found || s.length < t.length;
};


var isOneEditDistance = function(s, t) {
    if(s.length > t.length) {
        var tmp = s;
        s = t;
        t = tmp;
    }
    
    if(t.length - s.length > 1) {
        return false;
    }
    
    
    var i = 0;
    var j = 0;
    var diff = 0;
    
    while(i < s.length && j < t.length) {
        if(s[i] !== t[j]) {
            if(diff !== 0) {
                return false;
            }
            diff++;
            
            if(t.length !== s.length) {
                i--;
            }
        }
        
        i++;
        j++;
    }
    
    return diff === 1 || (t.length !== s.length && (t.length - j) === 1);
};