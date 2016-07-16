// This is a follow up of Shortest Word Distance. The only difference is now you are given the list of words and your method will be called repeatedly many times with different parameters. How would you optimize it?

// Design a class which receives a list of words in the constructor, and implements a method that takes two words word1 and word2 and return the shortest distance between these two words in the list.

// For example,
// Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

// Given word1 = “coding”, word2 = “practice”, return 3.
// Given word1 = "makes", word2 = "coding", return 1.

// Note:
// You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.

// Hide Company Tags LinkedIn
// Hide Tags Hash Table Design
// Show Similar Problems


/**
 * @constructor
 * @param {string[]} words
 */
var WordDistance = function(words) {
    this.positions = {};
    
    for(var i = 0; i < words.length; i++) {
        var word = words[i];
        
        this.positions[word] = this.positions[word] || [];
        this.positions[word].push(i);
    }
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {integer}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    var i = 0;
    var j = 0;
    var dist = Infinity;
    var pos1 = this.positions[word1];
    var pos2 = this.positions[word2];
    
    while(i < pos1.length && j < pos2.length) {
        var i1 = pos1[i];
        var i2 = pos2[j];
        
        dist = Math.min(dist, Math.abs(i1 - i2));
        
        if(i1 < i2) {
            i++;
        } else {
            j++;
        }
    }
    
    return dist;
};

/**
 * Your WordDistance object will be instantiated and called as such:
 * var wordDistance = new WordDistance(words);
 * wordDistance.shortest("word1", "word2");
 * wordDistance.shortest("anotherWord1", "anotherWord2");
 */