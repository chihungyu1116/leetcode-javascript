// memory limit exceeded
// Time O(n*k)
// Space (n*k)
// ref: http://blog.csdn.net/fightforyourdream/article/details/14503469

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    var len = prices.length;
    
    if(len === 0) {
        return 0;
    }
    var globalBest = initMatrix(len, k + 1);
    var localBest = initMatrix(len, k + 1);
    
    // matrix[row][col]
    // row is ith day
    // col is jth transaction
    // localBest[i][j] is the max profit across i day, with j transaction where there is transaction happening on i day
    // globalBest[i][j] is the max profit across i day, with j transaction
    
    for(var i = 1; i < len; i++) {
        var diff = prices[i] - prices[i - 1];
        
        for(var j = 1; j <= k; j++) {
            
            // globalBest[i - 1][j - 1] + Math.max(diff, 0)
            // -> current global best before ith day and jth transaction, Math.max(diff, 0) means we can take this transaction into account or discard it.
            // localBest[i - 1][j] + diff 
            // -> since localBest[i][j] means the last transaction has to happen on this day, regardless transaction lost money or not, we need to add it.
            // In addition, localBest[i - 1][j] + diff -> does not add transaction count e.g.
            // [buy, sell and buy, sell] is the same as [buy, nothing, sell] since it's all continuous actions
            localBest[i][j] = Math.max(globalBest[i - 1][j - 1] + Math.max(diff, 0), localBest[i - 1][j] + diff);
            globalBest[i][j] = Math.max(globalBest[i - 1][j], localBest[i][j]);
        }
    }
    
    return globalBest[len - 1][k];
};


function initMatrix(days, transactions) {
    var matrix = [];
    
    for(var i = 0; i < days; i++) {
        matrix.push([]);
        for(var j = 0; j < transactions; j++) {
            matrix[i][j] = 0;
        }
    }
    
    return matrix;
}