// There are a row of n houses, each house can be painted with one of the k colors.
// The cost of painting each house with a certain color is different.
// You have to paint all the houses such that no two adjacent houses have the same color.

// The cost of painting each house with a certain color is represented by a n x k cost matrix.
// For example, costs[0][0] is the cost of painting house 0 with color 0;
// costs[1][2] is the cost of painting house 1 with color 2, and so on... Find the minimum cost to paint all houses.

// Note:
// All costs are positive integers.

// Follow up:
// Could you solve it in O(nk) runtime?

// Hide Company Tags Facebook
// Show Tags
// Show Similar Problems

/**
 * @param {number[][]} costs
 * @return {number}
 */
 
//  reference https://segmentfault.com/a/1190000003903965
var minCostII = function(costs) {
    if(costs === null || costs.length === 0) {
        return 0;
    }
    
    var min1Idx = -1;
    var min1 = 0;
    var min2 = 0;
    
    for(var i = 0; i < costs.length; i++) {
        // min1 and min2 for recording the smallest and the second smallest
        // The min cost of using the current paint k:
        //  is equal to: the min cost of previous paint j (k !== j)
        // In order to find the min cost which k !== j, we can use 2 variable min1 and min2 
        
        var oldMin1Idx = min1Idx;
        var oldMin1 = min1;
        var oldMin2 = min2;
        
        min1Idx = -1;
        min1 = Infinity;
        min2 = Infinity;
        
        for(var j = 0; j < costs[i].length; j++) {
            if(j === oldMin1Idx) {
                costs[i][j] += oldMin2;
            } else {
                costs[i][j] += oldMin1;
            }
            
            if(costs[i][j] < min1) {
                min2 = min1;
                min1 = costs[i][j];
                min1Idx = j;
            } else if(costs[i][j] < min2) {
                min2 = costs[i][j];
            }
        }
    }

    return min1;
};