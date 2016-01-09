// Leetcode 318
// Language: Javascript
// Problem: https://leetcode.com/problems/maximum-product-of-word-lengths/
// Author: Chihung Yu
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    var processed = [];
    
    for(var i = 0; i < words.length; i++) {
        processed.push(compute(words[i]));
    }

    var result = [];
    var max = 0;
    
    for(i = 0; i < words.length; i++) {
        for(var j = i + 1; j < words.length; j++) {
            if((processed[i] & processed[j]) === 0) {
                var cur = words[i].length * words[j].length;
                
                if(cur > max) {
                    max = cur;
                }
            }
        }
    }
    
    return max;
};

function compute(word) {
    var val = 0;
    var base = "a".charCodeAt(0);
    
    for(i = 0; i < word.length; i++){
        val |= (1 << (word.charCodeAt(i) - base));
        
    }
    return val;
}