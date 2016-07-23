// http://yucoding.blogspot.com/2015/10/leetcode-question-basic-calculator.html
// http://blog.welkinlan.com/2015/09/06/basic-calculator-i-ii-leetcode-java/

/**
Implement a basic calculator to evaluate a simple expression string.

The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .

You may assume that the given expression is always valid.

Some examples:
"1 + 1" = 2
" 2-1 + 2 " = 3
"(1+(4+5+2)-3)+(6+8)" = 23
Note: Do not use the eval built-in library function.
*/
/**
 * @param {string} s
 * @return {number}
 */
// var calculate = function(s) {
//     var stack = [],
//         len = s.length,
//         sum = 0,
//         num,
//         ch,
//         j,
//         i;
    
//     stack.push(1);
//     stack.push(1);
    
//     for (i = 0; i < len; i++) {
//         ch = s.charAt(i);
        
//         if (!isNaN(parseInt(ch))) {
//             num = parseInt(ch);
            
//             for (j = i + 1; j < len && !isNaN(parseInt(s.charAt(j))); j++) {
//                 num = num * 10 + parseInt(s.charAt(j));
//             }
            
//             sum += stack.pop() * num;
            
//             i = j - 1;
//         } else if (ch === '+' || ch === '(') {
//             stack.push(stack[stack.length - 1]);
//         } else if (ch === '-') {
//             stack.push(stack[stack.length - 1] * (-1));
//         } else if (ch === ')') {
//             stack.pop();
//         }
//     }
    
//     return sum;
// };



/**
Implement a basic calculator to evaluate a simple expression string.

The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .

You may assume that the given expression is always valid.

Some examples:
"1 + 1" = 2
" 2-1 + 2 " = 3
"(1+(4+5+2)-3)+(6+8)" = 23
Note: Do not use the eval built-in library function.
*/
/**
 * @param {string} s
 * @return {number}
 */



console.log(calculate("10+20-((2-4)*6-5)*6"));
var calculate = function(s) {





}

function helper(s, i, sign, finalSum, currentSum) {
    while(i < s.length) {
        if(s[i].match(/[0-9]/)) {
            var num = 0;

            while(i < s.length) {
                if(s[i].match(/[0-9]/)) {
                    num *= 10;
                    num += parseInt(s[i]);
                    i++                    
                } else {
                    break;
                }
            }
        } else if(s[i] === '-') {

        } else if(s[i] === '+') {
            return num + helper(s, i, sign, finalSum, currentSum);
        } else if(s[i] === '*') {

        } else if(s[i] === '/') {

        } else if(s[i] === '(') {

        } else if(s[i] === ')') {

        }

        i++;
    }
}