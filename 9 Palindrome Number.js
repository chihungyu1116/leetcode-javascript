// Leetcode #9:
// Language: Javascript
// Problem: https://leetcode.com/problems/palindrome-number/
// Author: Chihung Yu
/**
 * Leetcode Question 
 * @param {number} x
 * @return {boolean}
 */
 
var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }
    
    var div = 1;
    
    while(parseInt(x/div) >= 10){
        div *= 10;
    }
    
    while(x !== 0){
        var l = parseInt(x/div);
        var r = x%10;
        
        if(l !== r){
            return false;
        }
        
        x = x % div;
        x = parseInt(x/10);
        
        div = parseInt(div/100);
    }
    
    return true;
};