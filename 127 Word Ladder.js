// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time
// Each intermediate word must exist in the word list
// For example,

// Given:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]
// As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.

// Note:
// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// Amazon LinkedIn Snapchat Facebook Yelp


// Leetcode 127
// Language: Javascript
// Problem: https://leetcode.com/problems/word-ladder/
// Author: Chihung Yu

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    var visited = new Set();
    var queue = [];
    var level = 1;
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    queue.push(beginWord);
    visited.add(beginWord);    
    
    while(queue.length > 0) {
        
        var len = queue.length;
        
        for(var i = 0; i < len; i++) {
            var word = queue.shift();
            
            for(var j = 0; j < word.length; j++) {
                for(var k = 0; k < letters.length; k++) {
                    var newWord = word.substring(0, j) + letters[k] + word.substring(j + 1);
                    
                    if(newWord === endWord) {
                        return level + 1;
                    }
                    if(wordList.has(newWord) && !visited.has(newWord)) {
                        queue.push(newWord);
                        visited.add(newWord);
                    }
                }
            }
        }
        
        level++;
    }
    
    return 0;
};