// Leetcode #166
// Language: Javascript
// Problem: https://leetcode.com/problems/fraction-to-recurring-decimal/
// Author: Chihung Yu
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
//  http://blog.csdn.net/ljiabin/article/details/42025037
var fractionToDecimal = function(numerator, denominator) {
    if(numerator === null || denominator === null){
        return "";
    }
    
    if(numerator === 0){
        return "0";
    }
    
    if(denominator === 0){
        return "";
    }
    
    var answer = "";
    var isNegative = false;
    if((numerator < 0) ^ (denominator < 0)){
        isNegative = true;
    }
    
    var num = Math.abs(numerator);
    var den = Math.abs(denominator);
    
    var res = ~~(num / den);
    
    answer += res;
    
    var rem = (num % den) * 10;
    
    if(rem === 0){
        return fixAnswer(isNegative,answer);
    }
    
    var map = {}
    answer += ".";
    
    while(rem !== 0){
        if(map[rem]){
            var beg = answer.substring(0,map[rem]);
            var end = answer.substring(map[rem]);
            
            answer = beg + '(' + end +')';
            
            return fixAnswer(isNegative,answer);
        }
        
        map[rem] = answer.length;
        res = ~~(rem / den);
        
        answer += res;
        rem = rem%den*10;
    }
    
    return fixAnswer(isNegative,answer);
};

var fixAnswer = function(isNegative, answer){
    answer = answer.replace(/-/g,'');
    if(isNegative){
        answer = '-' + answer;
    }
    
    return answer;
}