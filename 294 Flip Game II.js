// You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move and therefore the other person will be the winner.

// Write a function to determine if the starting player can guarantee a win.

// For example, given s = "++++", return true. The starting player can guarantee a win by flipping the middle "++" to become "+--+".

// Follow up:
// Derive your algorithm's runtime complexity.

// Hide Company Tags Google
// Hide Tags Backtracking
// Hide Similar Problems (E) Nim Game (E) Flip Game (M) Guess Number Higher or Lower II



/**
 * @param {string} s
 * @return {boolean}
 */
var canWin = function(s) {
    if(s === null || s.length === 0)   {
        return false;
    }
    
    var arr = s.split('');
    

    // player 1 can guarantee win if the move player 1 made can lead to player 2 no win of winning
    function checkCanWin(arr) {
        for(var i = 0; i < arr.length - 1; i++) {
            if(arr[i] === '+' && arr[i+1] === '+') {
                arr[i] = arr[i+1] = '-';
                
                var win = !checkCanWin(arr);
                
                arr[i] = arr[i+1] = '+';
                
                if(win) {
                    return true;
                }
            }
        }
        
        return false;
    }
    
    
    return checkCanWin(arr);
};