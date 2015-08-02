/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // col
    for(var i = 0; i < board.length; i++){
        var dupCheck = [];
        
        for(var j = 0; j < board[0].length; j++){
            if(board[i][j] !== '.' && dupCheck[board[i][j]]){
                return false;
            } else {
                dupCheck[board[i][j]] = true;
            }
        }
    }
    
    for(i = 0; i < board.length; i++){
        dupCheck = [];
        
        for(j = 0; j < board[0].length; j++){
            if(board[j][i] !== '.' && dupCheck[board[j][i]]){
                return false;
            } else {
                dupCheck[board[j][i]] = true;
            }
        }
    }
    
    for(i = 0; i < board.length; i+=3){
        for(j = 0; j < board.length; j+=3){
            dupCheck = [];
            
            for(var x = 0; x < 3; x++){
                for(var y = 0; y < 3; y++){
                    if(board[i+x][j+y] !== '.' && dupCheck[board[i+x][j+y]]){
                        return false;
                    } else {
                        dupCheck[board[i+x][j+y]] = true;
                    }
                }
            }
        }
    }
    
    return true;
  
  
    
};