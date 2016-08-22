// Given a digit string, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below.



// Input:Digit string "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:
// Although the above answer is in lexicographical order, your answer could be in any order you want.

// Hide Company Tags Amazon Dropbox Google Uber Facebook
// Hide Tags Backtracking String
// Hide Similar Problems (M) Generate Parentheses (M) Combination Sum


/**
 * @param {string} digits
 * @return {string[]}
 */
 
var numToLetters = {
    '0': ' ',
    '1': '',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
};
 
var letterCombinations = function(digits) {
    var res = [];
    
    if(digits.length === 0) {
        return res;
    }
    
    function dfs(digits, idx, curr) {
        if(idx === digits.length) {
            res.push(curr);
            return;
        }
        
        var letters = numToLetters[digits[idx]];
        
        for(var i = 0; i < letters.length; i++) {
            dfs(digits, idx + 1, curr + letters[i]);
        }
    }
    
    dfs(digits, 0, '');
    return res;
};