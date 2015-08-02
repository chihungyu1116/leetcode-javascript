// Leetcode 131
// Language: Javascript
// Problem: https://leetcode.com/problems/palindrome-partitioning/
// Author: Chihung Yu
/**
 * @param {string} s
 * @returns {string[][]}
 */
var partition = function(s) {
    
    var result = [];
    var list = [];
    
    if(s === null || s.length === 0){
        return [];
    }
    
    calculate(s, result, list);
    return result;
};

var isPalindrome = function(s){
    var i = 0;
    var j = s.length - 1;
    
    while(i < j){
        if(s[i] !== s[j]){
            return false;
        }
        
        i++;
        j--;
    }
    
    return true;
}

var calculate = function(s, result, list){
    if(s.length === 0){
        result.push(list.slice());
        return;
    }
    
    for(var i = 1; i <= s.length; i++){
        var substring = s.substring(0,i);
        
        if(isPalindrome(substring)){
            list.push(substring);
            var restSubstring = s.substring(i);
            
            calculate(restSubstring, result, list);
            list.pop();
        }
    }
}