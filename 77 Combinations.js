// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

// For example,
// If n = 4 and k = 2, a solution is:

// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]
// Hide Tags Backtracking
// Hide Similar Problems (M) Combination Sum (M) Permutations


/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if(k === 0 || n === 0){
        return [];
    }
    
    var result = [];
    var output = [];
    generate(result, output, n, k, 1);
    
    return result;
};

var generate = function(result, output, n, k, cur){
    if(output.length === k){
        result.push(output.slice());
        return;
    }
    if(cur > n){
        return;
    }
    
    output.push(cur)
    generate(result, output, n, k, cur + 1);
    output.pop();
    generate(result, output, n, k, cur + 1);
}