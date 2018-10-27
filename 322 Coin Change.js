/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {    
    var dp = [0];
    for(var i = 1; i <= amount; i++) {
        dp.push(-1);
    }
    

    for(var a = 0; a < amount; a++) {
        if(dp[a] < 0) {
            continue;
        }
        
        for(var c = 0; c < coins.length; c++) {
            var coin = coins[c];
            
            if((a + coin) > amount) {
                continue;
            }
            
            // if(dp[a + coin] < 0 || dp[a + coin] > dp[a] + 1) {
            if(dp[a + coin] < 0) {
                dp[a + coin] = dp[a] + 1;
            }
        }
    }
    console.log(dp)
    console.log(dp[amount])
    return dp[amount];
};

coinChange([1,2,5,10,25], 25);



// Solution 3 
var coinChange3 = function(coins, amount) {
  var memo = [];
   for(var i = 0; i <= amount; i++) {
    memo[i] = Number.POSITIVE_INFINITY;
  }
  memo[0] = 0;
   for(var i = 0; i < coins.length; i++) {
    const coin = coins[i];
    for(var j = coin; j < memo.length; j++) {
      memo[j] = min2(memo[j], memo[j - coin] + 1);
    }
  }
   return (memo[amount] == Number.POSITIVE_INFINITY) ? -1 : memo[amount];
};
 var min2 = function(a, b) {
  return (a < b) ? a : b;
}
 // Solution 2
var buildMemoKey = function(position, amount) {
  return position + "-" + amount;
}
 var coinChange2 = function(coins, amount) {
  var memo = {};
  var solution = coinChangeAux2(coins, amount, 0, memo, Number.POSITIVE_INFINITY);
  return solution == Number.POSITIVE_INFINITY ? -1 : solution;
};
 var coinChangeAux2 = function(coins, amount, pos, memo) {
  var key = buildMemoKey(pos, amount);
  if(memo[key]) {
    return memo[key];
  }
  if(amount < 0) {
    return Number.POSITIVE_INFINITY; 
  } else if(amount == 0) {
    return 0;
  } else if(pos >= coins.length) {
    return Number.POSITIVE_INFINITY;
  }
  
  var left = coinChangeAux2(coins, amount, pos + 1, memo);
  var middle = 1 + coinChangeAux2(coins, amount - coins[pos], pos + 1, memo);
  var right = 1 + coinChangeAux2(coins, amount - coins[pos], pos, memo);
  
  var solution = min(left, middle, right);
  memo[key] = solution;
  return solution;
}
 // Solution 1 naive
var coinChange1 = function(coins, amount) {
  var solution = coinChangeAux1(coins, amount, 0);
  return solution == Number.POSITIVE_INFINITY ? -1 : solution;
};
 var coinChangeAux1 = function(coins, amount, pos) {
  if(amount < 0) {
    return Number.POSITIVE_INFINITY; 
  } else if(amount == 0) {
    return 0;
  } else if(pos >= coins.length) {
    return Number.POSITIVE_INFINITY;
  }
  
  var left = coinChangeAux1(coins, amount, pos + 1);
  var middle = 1 + coinChangeAux1(coins, amount - coins[pos], pos + 1);
  var right = 1 + coinChangeAux1(coins, amount - coins[pos], pos);
  
  var partialSol = min(left, middle, right);
  return partialSol;
}
 var min = function(a, b, c) {
  if(a < b) { return (a < c) ? a : c };
  return (b < c) ? b : c;
}
