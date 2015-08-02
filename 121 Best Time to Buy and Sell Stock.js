// Leetcode 121
// Language: Javascript
// Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Author: Chihung Yu
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