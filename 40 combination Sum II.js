// Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

// Each number in C may only be used once in the combination.

// Note:
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8, 
// A solution set is: 
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]
// Hide Tags Array Backtracking
// Hide Similar Problems (M) Combination Sum



/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var result = [];
    
    if(candidates === null || candidates.length === 0){
        return result;
    }
    
    var output = [];
    candidates.sort(function(a,b){return a > b ? 1 : -1;});
    generate(candidates, target, 0, result, output);
    
    return result;
};

var generate = function(c, t, index, result, output){
    if(t < 0){
        return;
    }
    if(t === 0){
        result.push(output.slice());
        return
    }
    
    for(var i = index; i < c.length; i++){
        if(i > index && c[i] === c[i-1]) {
            continue;
        }
        var val = c[i];

        output.push(val);
        generate(c, t - val, i + 1, result, output);
        output.pop();
    }
}