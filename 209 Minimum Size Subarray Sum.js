// http://blog.csdn.net/lisonglisonglisong/article/details/45666975
// http://www.cnblogs.com/grandyang/p/4501934.html

// Given an array of n positive integers and a positive integer s, find the minimal length of a subarray of which the sum ≥ s. If there isn't one, return 0 instead.

// For example, given the array [2,3,1,2,4,3] and s = 7,
// the subarray [4,3] has the minimal length under the problem constraint.

// click to show more practice.

// Credits:
// Special thanks to @Freezen for adding this problem and creating all test cases.

// Hide Company Tags Facebook
// Hide Tags Array Two Pointers Binary Search
// Hide Similar Problems (H) Minimum Window Substring (M) Maximum Size Subarray Sum Equals k


/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

// O(n) solution
var minSubArrayLen = function(s, nums) {
    var sum = 0;
    var left = 0;
    var right = 0;
    var minLen = Infinity;
    
    while(right < nums.length) {
        while(right < nums.length && sum < s) {
            sum += nums[right++];
        }
        
        while(sum >= s) {
            minLen = Math.min(minLen, right - left);
            sum -= nums[left++];
        }
    }
    
    return minLen > nums.length ? 0 : minLen;
};

// The O(NlogN) solution is to sum up the array
// [1,2,3,4,5] becomes [1,3,6,10,15]
// then iterate through array from index 0 to nums.length - 1
// for each value in the summed array
// binary search values after that index so the difference becomes greater than s
// example
// s = 8
// at index 0 with value 1 look between [3,6,10,15] using binary search.
// we can find that at value 10 the difference is 10 - 1 = 9 the minLen is index 3 - 1 + 1 = 3
// then we check index 1 with value 3 and binary search [6,10,15] we can find that at value 15 we have difference 15 - 3 = 12
// the distance is index 4 - 1 + 1 = 4

// console.log(minSubArrayLen(11, [1,2,3,4,5]));