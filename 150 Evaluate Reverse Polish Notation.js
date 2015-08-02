// Leetcode #150
// Language: Javascript
// Problem: https://leetcode.com/problems/evaluate-reverse-polish-notation/
// Author: Chihung Yu
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var stack = [];
    
    for(var i = 0; i < tokens.length; i++){
        var t = tokens[i];
        
        if(t === '+'){
            var x = parseInt(stack.pop());
            var y = parseInt(stack.pop());
            stack.push(x + y);
        } else if(t === '-'){
            x = parseInt(stack.pop());
            y = parseInt(stack.pop());
            stack.push(y - x);
        } else if(t === '*'){
            x = parseInt(stack.pop());
            y = parseInt(stack.pop());
            stack.push(parseInt(y * x));
        } else if(t === '/'){
            x = parseInt(stack.pop());
            y = parseInt(stack.pop());
            stack.push(parseInt(y / x));
        } else {
            stack.push(t);
        }
    }
    var num = stack.pop();
    return parseInt(num);
};