// Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

// For example,
// Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

// Given word1 = “coding”, word2 = “practice”, return 3.
// Given word1 = "makes", word2 = "coding", return 1.

// Note:
// You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.

// Hide Company Tags LinkedIn
// Hide Tags


var shortestDistance = function(words, word1, word2) {
    var idx1 = -1;
    var idx2 = -1;
    var dist = words.length - 1;
    
    for(var i = 0; i < words.length; i++) {
        if(words[i] === word1) {
            idx1 = i;
        } else if(words[i] === word2) {
            idx2 = i;
        }
      
        if(idx1 !== -1 && idx2 !== -1) {
          dist = Math.min(dist, Math.abs(idx1 - idx2))
        }
    }
    
    return dist;
};