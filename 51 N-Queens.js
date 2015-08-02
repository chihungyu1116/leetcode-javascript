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
        if(columnForRow[row] === columnForRow[i] || Math.abs(columnForRow[row] - columnForRow[i]) === row - i){
            return false;
        }
    }
    
    return true;
}