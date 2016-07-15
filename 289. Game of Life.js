/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    // 3 over-population or under population
    // 2 means reproduction
    // 1 is alive
    // 0 is dead
    // if mod 2 === 1 means the current state is alive else dead
    
    
    var rows = board.length;
    var cols = board[0].length;
    var dirX = [-1, 0, 1, 1, 1, 0,-1,-1];
    var dirY = [-1,-1,-1, 0, 1, 1, 1, 0];
    
    for(var i = 0; i < rows; i++) {
        for(var j = 0; j < cols; j++) {
            var cur = board[i][j];
            var count = 0;

            for(var k = 0; k < 8; k++) {
                var x = i + dirX[k];
                var y = j + dirY[k];
                if(x >= 0 && x <= rows && y >= 0 && y <= cols && board[x][y]%2 === 1) {
                    count++;
                }
            }
            
            if(board[i][j] === 1) {
                if(count > 3 || count < 2) {


                    board[i][j] = 3;
                }
            } else {
                if(count === 3) {
                    board[i][j] = 2;
                }
            }
        }
    }
      
    for(i = 0; i < rows; i++) {
        for(j = 0; j < cols; j++) {
            if(board[i][j] === 3) {
                board[i][j] = 0;
            } else if(board[i][j] === 2) {
                board[i][j] = 1;
            }
        }
    }
};