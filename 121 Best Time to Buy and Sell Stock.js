// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Example 1:
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5

// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
// Example 2:
// Input: [7, 6, 4, 3, 1]
// Output: 0

// In this case, no transaction is done, i.e. max profit = 0.
// Hide Company Tags Amazon Microsoft Bloomberg Uber Facebook
// Hide Tags Array Dynamic Programming
// Hide Similar Problems (M) Maximum Subarray (M) Best Time to Buy and Sell Stock II (H) Best Time to Buy and Sell Stock III (H) Best Time to Buy and Sell Stock IV (M) Best Time to Buy and Sell Stock with Cooldown

/**
 * @param {number[]} prices
 * @return {number}
 */
//  http://fisherlei.blogspot.com/2013/01/leetcode-best-time-to-buy-and-sell.html
var maxProfit = function(prices) {
    if(prices === null || prices.length === 0){
        return 0;
    }
    
    var max = 0;
    var diff = 0;
    var min = Infinity;
    
    for(var i = 0; i < prices.length; i++){
        var price = prices[i];
        if(min > price){
            min = price;
        }
        
        diff = price - min;
        
        if(max < diff){
            max = diff;
        }
    }
    
    return max;
};