// Leetcode #151
// Language: Javascript
// Problem: https://leetcode.com/problems/reverse-words-in-a-string/
// Author: Chihung Yu
/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    return str.split(' ').reverse().join(' ').replace(/^\s+|\s+$/g,'').replace(/\s+/g, ' ');
};