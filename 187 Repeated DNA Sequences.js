// All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

// Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

// For example,

// Given s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",

// Return:
// ["AAAAACCCCC", "CCCCCAAAAA"].
// Hide Company Tags LinkedIn
// Hide Tags Hash Table Bit Manipulation


/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    var hash = {};
    var result = [];
    
    for(var i = 10; i <= s.length; i++) {
        var substr = s.substring(i - 10, i);
        if(hash[substr] === undefined) {
            hash[substr] = 1;
        } else if(hash[substr] === 1) {
            hash[substr]++;
            result.push(substr);
        }
    }
    
    return result;
};