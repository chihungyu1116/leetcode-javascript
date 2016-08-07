// Print a N x M matrix in diagonal from the upper left to lower right.
// However, with the following caveat.
// It's easy to just show the input and expect output. 
// matrix: [
//   'abc',
//   'defg',
//   'hijk'
// ]
// output: aej bfk cg di h


// matrix: [
//   'abc',
//   'defgsb',
//   'hijk'
// ]
// output: aej bfk cg s b di h

function matrixDiagonalTraversal(matrix) {
  var maxLen = 0;
  for(var i = 0; i < matrix.length; i++) {
    maxLen = Math.max(matrix[i].length, maxLen);
  }

  for(i = 0; i < matrix.length; i++) {
    var row = matrix[i];
    var cnt = maxLen - row.length;
    
    while(cnt > 0) {
      matrix[i] += ' ';
      cnt--;
    }

    var leftStr = matrix[i].substring(i);

    var reversedRightStr = '';
    cnt = i;

    while(cnt > 0) {
      reversedRightStr += matrix[i][--cnt];
    }

    matrix[i] = leftStr + reversedRightStr;
  }

  var result = '';

  for(i = 0; i < maxLen; i++) {
    for(var j = 0; j < matrix.length; j++) {
      if(matrix[j][i] !== ' ') {
        result += matrix[j][i];  
      }
    }
  }

  return result;
}




console.log(matrixDiagonalTraversal([
  'abc',
  'defgsb',
  'hijk',
  'lm',
  'nopq'
]));


'abc___'
'deggsb'
'hijk__'
'lm____'
'nopq__'


'abc___'
'efgsbd'
'jk__ih'
'____ml'
'__qpon'