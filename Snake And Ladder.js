// Snake and Ladder Problem
// Given a snake and ladder board, find the minimum number of dice throws required to reach the destination or last cell from source or 1st cell. Basically, the player has total control over outcome of dice throw and wants to find out minimum number of throws required to reach last cell.

// If the player reaches a cell which is base of a ladder, the player has to climb up that ladder and if reaches a cell is mouth of the snake, has to go down to the tail of snake without a dice throw.

// snakesladders

// For example consider the board shown on right side (taken from here), the minimum number of dice throws required to reach cell 30 from cell 1 is 3. Following are steps.

// a) First throw two on dice to reach cell number 3 and then ladder to reach 22
// b) Then throw 6 to reach 28.
// c) Finally through 2 to reach 30.

// There can be other solutions as well like (2, 2, 6), (2, 4, 4), (2, 3, 5).. etc.



function snakeAndLadder(moves, n){
  var visited = Array(n).fill(false);
  visited[0] = true;
  var queue = [];
  queue.push(0);

  var dist = 0;
  
  while(queue.length > 0) {
    var len = queue.length;

    for(var j = 0; j < len; j++) {
      var move = queue.shift();
      
      if(move === n - 1) {
        return dist;
      }
      
      for(var i = move + 1; i <= move + 6; i++) {
        
        if(!visited[i]) {
          visited[i] = true;  
        
          if(moves[i] !== -1) {
            newMove = moves[i];
          } else {
            newMove = i;
          }
          
          queue.push(newMove);
        }
      }
    }

    dist++;
  }
  
  return -1;
}

var moves = [];
var n = 100;
for(var i = 0; i < n; i++){
  moves.push(-1);
}

moves[2] = 53;
moves[41] = 99;
moves[54] = 40;


console.log(snakeAndLadder(moves, n));