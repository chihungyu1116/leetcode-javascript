// Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.

// Example 1:
// Given nums = [1, -1, 5, -2, 3], k = 3,
// return 4. (because the subarray [1, -1, 5, -2] sums to 3 and is the longest)

// Example 2:
// Given nums = [-2, -1, 2, 1], k = 1,
// return 2. (because the subarray [-1, 2] sums to 1 and is the longest)

// Follow Up:
// Can you do it in O(n) time?

// Hide Company Tags Palantir Facebook
// Hide Tags Hash Table
// Hide Similar Problems (M) Minimum Size Subarray Sum (E) Range Sum Query - Immutable


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    var maxLen = 0;
    var currSum = 0;
    var dict = { 0: -1 };
    
    for(var i = 0; i < nums.length; i++) {
        currSum += nums[i];
        
        // since we are looking for the maxlen, dict is used to store the very first
        // location where currSum occurred      
        if(dict[currSum] === undefined) {
            dict[currSum] = i;
        }
        
        if(dict[currSum - k] !== undefined) {
            maxLen = Math.max(maxLen, i - dict[currSum - k]);
        }
    }
    
    return maxLen;
};