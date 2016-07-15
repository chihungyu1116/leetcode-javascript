// Given a set of distinct integers, nums, return all possible subsets.

// Note: The solution set must not contain duplicate subsets.

// For example,
// If nums = [1,2,3], a solution is:

// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var result = [];
    generate(nums, 0, [], result);
    return result;
};

var generate = function(nums, index, cur, result) {
    if(index === nums.length) {
        result.push(cur.slice());
        return
    }
    
    generate(nums, index + 1, cur, result);
    cur.push(nums[index]);
    generate(nums, index + 1, cur, result);
    cur.pop();
}