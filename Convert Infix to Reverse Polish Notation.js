// https://www.youtube.com/watch?v=LQ-iW8jm6Mk

function convertInfixToReversePolishNotation(strExpression) {
  var precedenceMap = {
    '=': 1,
    '(': 2,
    '+': 3,
    '-': 3,
    '*': 4,
    '/': 4,
    '~': 4,
    '^': 5
  };

  var stack = [];
  var rpn = [];

  for(var i = 0; i < strExpression.length; i++) {
    var ch = strExpression[i];
    if(!isNaN(parseInt(ch))) {
      var num = 0;

      while(i < strExpression.length && !isNaN(parseInt(strExpression[i]))) {
        num *= 10;
        num += parseInt(strExpression[i]);
        i++;
      }

      i--;
      rpn.push(num);
    } else if(ch === '(') {
      stack.push('(');
    } else if(ch === '*' || ch === '-' || ch === '+') {
      var precedence = precedenceMap[ch];

      if(precedence > precedenceMap[stack[stack.length - 1]]) {
        stack.push(ch);
      } else {
        while(precedenceMap[stack[stack.length - 1]] >= precedence) {
          rpn.push(stack.pop());  
        }

        stack.push(ch);
      }
    } else if(ch === ')') {
      while(stack[stack.length - 1] !== '(') {
        rpn.push(stack.pop());
      }

      stack.pop();
    }
  }

  while(stack.length > 0) {
    rpn.push(stack.pop());
  }

  return rpn;
}


// console.log(convertInfixToReversePolishNotation('(12*-36+(3+4-2)-(4*4+12))'));
console.log(convertInfixToReversePolishNotation('12+12*12+(3-4)'))

