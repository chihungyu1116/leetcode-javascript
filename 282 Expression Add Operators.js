// Given a string that contains only digits 0-9 and a target value, return all possibilities to add binary operators (not unary) +, -, or * between the digits so they evaluate to the target value.

// Examples: 
// "123", 6 -> ["1+2+3", "1*2*3"] 
// "232", 8 -> ["2*3+2", "2+3*2"]
// "105", 5 -> ["1*0+5","10-5"]
// "00", 0 -> ["0+0", "0-0", "0*0"]
// "3456237490", 9191 -> []
// Credits:
// Special thanks to @davidtan1890 for adding this problem and creating all test cases.

// Hide Company Tags Google Facebook
// Hide Tags Divide and Conquer
// Hide Similar Problems (M) Evaluate Reverse Polish Notation (H) Basic Calculator (M) Basic Calculator II (M) Different Ways to Add Parentheses


// reference: http://blog.csdn.net/pointbreak1/article/details/48596115

var addOperators = function(num, target) {
  function opRecur(num, target, lastOp, result, expression, results) {
    if(num.length === 0) {
      if(target === result) {
        results.push(expression);
      }
      return;
    }

    for(var i = 1; i <= num.length; i++) {
      var curr = num.substring(0, i);
      if(curr.length > 1 && curr[0] === '0') {
        continue;
      }

      var rest = num.substring(i);
      var currVal = parseInt(curr);

      if(expression.length === 0) {
        opRecur(rest, target, currVal, currVal, expression + curr, results);
      } else {
        opRecur(rest, target, currVal, result + currVal, expression + "+" + curr, results);  
        opRecur(rest, target,-currVal, result - currVal, expression + "-" + curr, results);  
        opRecur(rest, target, currVal * lastOp, result - lastOp + lastOp * currVal, expression + "*" + curr, results);  
        // need to record the last oprand for handling mulitiplication. 
        // result - lastOP + lastOP * curVaule 
        // e.g 4+3*2 when dealing with *2, we have 4+3 then -3 then do 3*2
        // The operation for the function will look like 4 + 3 - 3 + 3 * 2
      }
    }
  }

  var results = [];
  opRecur(num, target, 0, 0, '', results);
  return results;
};

console.log(addOperators('01023', 3));