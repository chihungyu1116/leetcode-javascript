// Numbers can be regarded as product of its factors. For example,

// 8 = 2 x 2 x 2;
//   = 2 x 4.
// Write a function that takes an integer n and return all possible combinations of its factors.

// Note: 
// You may assume that n is always positive.
// Factors should be greater than 1 and less than n.
// Examples: 
// input: 1
// output: 
// []
// input: 37
// output: 
// []
// input: 12
// output:
// [
//   [2, 6],
//   [2, 2, 3],
//   [3, 4]
// ]
// input: 32
// output:
// [
//   [2, 16],
//   [2, 2, 8],
//   [2, 2, 2, 4],
//   [2, 2, 2, 2, 2],
//   [2, 4, 4],
//   [4, 8]
// ]
// Hide Company Tags LinkedIn Uber
// Hide Tags Backtracking
// Show Similar Problems


/**
 * @param {number} n
 * @return {number[][]}
 */
 
// reference: http://www.cnblogs.com/airwindow/p/4822572.html
var getFactors = function(n) {
    var result = [];
    gatherResult(n, 2, [], result);
    return result;
};

function gatherResult(n, start, currentResult, finalResult) {
    if(n === 1) {
        if(currentResult.length > 1) {
            finalResult.push(currentResult.slice());
        }
        
        return;
    }
    // i = start will ensure ascending order
    for(var i = start; i <= n; i++) {
        if(n%i === 0) {
            currentResult.push(i);
            gatherResult(n/i, i, currentResult, finalResult);
            currentResult.pop();    
        }
    }
}
    