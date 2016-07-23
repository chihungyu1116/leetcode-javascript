// Implement a basic calculator to evaluate a simple expression string.

// The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

// You may assume that the given expression is always valid.

// Some examples:
// "3+2*2" = 7
// " 3/2 " = 1
// " 3+5 / 2 " = 5
// Note: Do not use the eval built-in library function.

// Credits:
// Special thanks to @ts for adding this problem and creating all test cases.

// Hide Company Tags Airbnb
// Hide Tags String
// Hide Similar Problems (H) Basic Calculator (H) Expression Add Operators



/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var values = [];
    var ops = [];
    
    for(var i = 0; i < s.length; i++) {
        var ch = s[i];
        if(ch === ' ') {
            continue;
        }
        
        if(ch.match(/\d/)) {
            var num = '';
            while(i < s.length && s[i].match(/\d/)) {
                num += s[i++];
            }
            values.push(parseInt(num));
            i--;
        } else if(ch === '-' || ch === '+' || ch === '*' || ch === '/') {
            if(!hasPrecedence(ch, ops[ops.length - 1])) {
                while(ops.length > 0 && !hasPrecedence(ch, ops[ops.length - 1])) {
                    values.push(applyOp(values.pop(), values.pop(), ops.pop()));
                }
            }
            ops.push(ch);
        }
    }
    
    while(ops.length > 0) {
        values.push(applyOp(values.pop(), values.pop(), ops.pop()));
    }
    
    return values.pop();
};

var hasPrecedence = function(op1, op2) {
    var map = {
        '-': 1,
        '+': 1,
        '/': 2,
        '*': 2
    }
    
    return map[op1] > map[op2];
}

var applyOp = function(v1, v2, op) {
    if(op === '*') {
        return v2*v1;
    } else if(op === '-') {
        return v2-v1;
    } else if(op === '+') {
        return v2+v1;
    } else if(op === '/') {
        return parseInt(v2/v1);
    }
}

console.log(calculate("1+1+1*3*4/2+2*3"), eval("1+1+1*3*4/2+2*3"));