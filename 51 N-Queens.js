/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    var res = [];
    helper(n, 0, [], res);
    return res;
};

var helper = function(n, row, columnForRow, res){
    if(row === n){
        var item = [];
        
        for(var i = 0; i < n; i++){
            var strRow = "";
            for(var j = 0; j < n; j++){
                if(columnForRow[i] === j){
                    strRow += "Q";
                } else {
                    strRow += ".";
                }
            }
            
            item[i] = strRow;
        }
        
        res.push(item);
        return;   
    }
    
    for(i = 0; i < n; i++){
        columnForRow[row] = i;
        
        if(isValid(row, columnForRow)){
            helper(n, row + 1, columnForRow, res); 
        }
    }
}

var isValid = function(row, columnForRow){
    for(var i = 0; i < row; i++){
        // 1. don't have to worry about values on the same column since it will onnly be set once
        // 2. same column, columnForRow[row] === columnForRow[i]
        // 3. checking both left and right diagonal, Math.abs(columnForRow[row] - columnForRow[i]) === row - i
        //   Math.abs(columnForRow[row] - columnForRow[i]) is checking both left and right diagonal
        if(columnForRow[row] === columnForRow[i] || Math.abs(columnForRow[row] - columnForRow[i]) === row - i){
            return false;
        }
    }
    
    return true;
}

// Solution 2

var solveNQueens = function(n) {
  var sol = [];
  solveNQueensAux(n, 0, new Set(), new Set(), new Set(), [], sol);
  return parseSolutions(sol, n);
};

var solveNQueensAux = function(n, row, diagonalDiffs, diagonalSums, cols, currentSol, sol) {
  if(row == n) { 
    sol.push(currentSol);  
    return; 
  }
  
  for(var i = 0; i < n; i++) {
    const diagonalDiff = i - row;
    const diagonalSum = i + row;
    if(!diagonalDiffs.has(diagonalDiff) && !cols.has(i) && !diagonalSums.has(diagonalSum)) {
      diagonalDiffs.add(diagonalDiff);
      diagonalSums.add(diagonalSum);
      cols.add(i);
      solveNQueensAux(n, row + 1, diagonalDiffs, diagonalSums, cols, [...currentSol, ...[[row, i]]], sol);
      cols.delete(i);
      diagonalDiffs.delete(diagonalDiff);
      diagonalSums.delete(diagonalSum);
    }
  }
  return;
}

var parseSolutions = function(sols, n) {
  var matrixes = [];
  for(var i = 0; i < sols.length; i++) {
    var sol = sols[i];
    var matrix = [];
    for(var row = 0; row < n; row++) {
      matrix[row] = []
      const queenPos = sol[row];
      for(var col = 0; col < n; col++) {
        matrix[row] += (queenPos[1] == col) ? "Q" : ".";
      }
    }

    matrixes.push(matrix);
  }

  return matrixes;
}
