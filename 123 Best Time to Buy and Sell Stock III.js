// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete at most two transactions.

// Note:
// You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

// http://www.cnblogs.com/springfor/p/3877068.html

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // Calculate MaxProfit from 0 to x and MaxProfit from x + 1 to len - 1;
    var profitFromZeroToX = [];
    var profitFromXToEnd = [];
    var min = prices[0];

    // get max profit from 0 to x
    for(var x = 1; x < prices.length; x++) {
        var price = prices[x];
        min = Math.min(price, min);
        profitFromZeroToX[x] = Math.max(profitFromZeroToX[x - 1] || 0, price - min);
    }
    // get max profit from i + 1 to end
    var max = prices[prices.length - 1];
    for(x = prices.length - 2; x >= 0; x--) {
        price = prices[x];
        max = Math.max(price, max);
        profitFromXToEnd[x] = Math.max(profitFromXToEnd[x + 1] || 0, max - price);
    }
    
    var maxProfit = 0;
    for(x = 0; x < prices.length; x++) {
        var maxProfitSeperateAtX = (profitFromZeroToX[x] || 0) + (profitFromXToEnd[x] || 0);
        maxProfit = Math.max(maxProfitSeperateAtX, maxProfit);
    }
    
    return maxProfit;
};
