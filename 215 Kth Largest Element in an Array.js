// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// For example,
// Given [3,2,1,5,6,4] and k = 2, return 5.

// Note: 
// You may assume k is always valid, 1 ≤ k ≤ array's length.

// Credits:
// Special thanks to @mithmatt for adding this problem and creating all test cases.

// Hide Company Tags Facebook Amazon Microsoft Apple Bloomberg Pocket Gems
// Hide Tags Heap Divide and Conquer
// Hide Similar Problems (M) Wiggle Sort II (M) Top K Frequent Elements



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 
//  use quick select
var findKthLargest = function(nums, k) {
    var smaller = [];
    var larger = [];
    var pivot = nums[parseInt(nums.length/2)];
    var pivotCnt = 0;
    
    for(var i = 0; i < nums.length; i++) {
        var num = nums[i];      
      
        if(num > pivot) {
            larger.push(num);
        } else if(num < pivot) {
            smaller.push(num);
        } else {
            pivotCnt++;
        }
    }
      
    if(k <= larger.length) { // if larger includes k
        return findKthLargest(larger, k);
    } else if(k - larger.length - pivotCnt <= 0) { // k is part of pivot
        return pivot;
    } else { // if smaller inclues k
        return findKthLargest(smaller, k - larger.length - pivotCnt);
    }
};