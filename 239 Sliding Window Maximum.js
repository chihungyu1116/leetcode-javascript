// Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// For example,
// Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Therefore, return the max sliding window as [3,3,5,5,6,7].

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    var result = [],
        linkedListWithTwoEndsOps = [],
        len = nums.length,
        i;
    
    if (k > len || k === 0) {
        return result;
    }
    
    for (i = 0; i < len; i++) {
        // Remove anything that is less than the current value
        // so linkedListWithTwoEndsOps maintains values greater than the curret value
        while (linkedListWithTwoEndsOps.length > 0 && nums[linkedListWithTwoEndsOps[linkedListWithTwoEndsOps.length - 1]] < nums[i]) {
            var val = linkedListWithTwoEndsOps.pop();
        }
        
        // In case that all elements in the linkedListWithTwoEndsOps are all greater than the current one (descending order)
        // Shift out the 
        if (linkedListWithTwoEndsOps[0] < i - k + 1) {
            linkedListWithTwoEndsOps.shift();
        }
        
        linkedListWithTwoEndsOps.push(i);
        
        // For each sliding window movement, we record the highest value in that sliding window
        // i >= k - 1 to ensure that we don't prematurely record values before we get to the full range of the first sliding window
        // e.g. [1  3  -1] -3  5  3  6  7       3
        // this ensure that i is at least at -1 (index 2)
        if (i >= k - 1) {
            result.push(nums[linkedListWithTwoEndsOps[0]]);
        }
    }
    
    return result;
};