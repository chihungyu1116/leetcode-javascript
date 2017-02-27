// Given a set of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

// The same repeated number may be chosen from C unlimited number of times.

// Note:
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// For example, given candidate set [2, 3, 6, 7] and target 7,
// A solution set is:
// [
//   [7],
//   [2, 2, 3]
// ]
// Hide Company Tags Snapchat Uber
// Hide Tags Array Backtracking
// Hide Similar Problems (M) Letter Combinations of a Phone Number (M) Combination Sum II (M) Combinations (M) Combination Sum III (M) Factor Combinations (M) Combination Sum IV



/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var result = [];

    if(candidates === null || candidates.length === 0){
        return result;
    }

    candidates.sort(function(a,b){return a > b ? 1 : -1});

    var output = [];

    generate(candidates, result, output, target, 0);

    return result;
};

var generate = function(candidates, result, output, sum, index){
    if(sum === 0){
        result.push(output.slice());
    }
    if(sum < 0){
        return;
    }

    for(var i = index; i < candidates.length; i++){
        if(i > index && candidates[i] === candidates[i - 1]){
            continue;
        }

        if(candidates[i] <= sum){
            output.push(candidates[i]);
            generate(candidates, result, output, sum - candidates[i], i);
            output.pop();
        }
    }
}


// Another solution
var combinationSum = function(candidates, target) {
    var results = [];
    comb(candidates.sort(), 0, [], 0, target, results);
    return results;
};

var comb = function(cand, index, partial, partialSum, target, results) {
    if(target === partialSum) {
        results.push(partial);
        return;
    }
    if(cand.length === index || partialSum > target) {
        return;
    }
    comb(cand, index, partial.concat([cand[index]]), 
         partialSum + cand[index], target, results);
    comb(cand, index + 1, partial, partialSum, target, results);
};
