// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

// For example,
// Given [100, 4, 200, 1, 3, 2],
// The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.

// Your algorithm should run in O(n) complexity.

// Hide Company Tags Google Facebook
// Hide Tags Array Union Find
// Hide Similar Problems (M) Binary Tree Longest Consecutive Sequence


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var maxLen = -Infinity;
    var hash = {};
    
    for(var i = 0; i < nums.length; i++) {
        hash[nums[i]] = 1;
    }
    
    var visited = {};
    
    for(i = 0; i < nums.length; i++) {
        var val = nums[i];
        if(visited[val]) {
            continue;
        }
        visited[val] = true;
        var len = 1;
        var preVal = val - 1;
        while(hash[preVal]) {
            len++
            visited[preVal--] = true;
        }
        var nxtVal = val + 1;
        while(hash[nxtVal]) {
            len++
            visited[nxtVal++] = true;
        }
        
        if(len > maxLen) {
            maxLen = len;
        }
    }
    
    return maxLen;
};