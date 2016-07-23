function evaluateStr(expression) {
  var values = [];
  var ops = [];

  for(var i = 0; i < expression.length; i++) {
    var ch = expression[i];

    if(ch === ' ') {
      continue;
    }

    if(ch.match(/\d/)) {
      var numStr = '';

      while(i < expression.length && expression[i].match(/\d/)) {
        numStr += expression[i++];
      }
      i--;
      values.push(parseInt(numStr));
    } else if(ch === '(') {
      ops.push(ch);
    } else if(ch === ')') {
      while(ops[ops.length - 1] !== '(') {
        values.push(applyOp(values.pop(), values.pop(), ops.pop()));
      }
      ops.pop();
    } else if(ch === '+' || ch === '-' || ch === '*' || ch === '/') {
      while(ops.length > 0 && hasPrecedence(ch, ops[ops.length - 1])) {
        values.push(applyOp(values.pop(), values.pop(), ops.pop()));  
      }
      ops.push(ch);
    }
  }

  while(ops.length > 0) {
    values.push(applyOp(values.pop(), values.pop(), ops.pop()));  
  }

  return values.pop();
}

function hasPrecedence(op1, op2) {
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

  var precendence1 = precedenceMap[op1];
  var precendence2 = precedenceMap[op2];

  return precendence2 >= precendence1;
}

function applyOp(val1, val2, op) {
  if(op === '*') {
    return val2*val1;
  } else if(op === '+') {
    return val2+val1;
  } else if(op === '/') {
    return parseInt(val2/val1);
  } else if(op === '-') {
    return val2-val1;
  }
}


var data = [
  '(11+(22*3-4)*5-(3+1))',
  '11+22*3+(1*3+1)',
  '11+22*3-(1*3+1)',
];

// '11+22*3*(1*3+1)' => doesn't work

data.forEach((d)=> {
  console.log(evaluateStr(d), eval(d));
});
