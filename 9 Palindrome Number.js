// Leetcode #9:
// Language: Javascript
// Problem: https://leetcode.com/problems/palindrome-number/
// Author: Chihung Yu

// Determine whether an integer is a palindrome. Do this without extra space.

 /**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }
    
    var div = 1;
    
    // it means that the div is still a valid divider
    // e.g 600 the divider should be 100 at maximum
    // e.g. 90 the divider should be 10 at maximum
    // e.g. 1 the divider should be a 1 at maximum
    while(parseInt(x/div) >= 10) {
        div *= 10;   
    }
    
    var left, right;
    
    // when div === 1 it means the digit only has one value to examine
    // e.g. 121 -> only 2 is left for examine which can be ignore
    // e.g. 1 -> 1
    // e.g. 43234 -> 2
    while(div > 1) {
        left = parseInt(x/div);
        right = x%10;
        if(left !== right) {
            return false;
        }
        
        x = x%div; // remove the left most digit
        x = parseInt(x/10); // remove the right most digit
        div /= 100;
    }
    
    return true;
};