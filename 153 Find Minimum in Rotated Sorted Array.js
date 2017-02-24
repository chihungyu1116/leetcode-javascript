// Leetcode #153
// Language: Javascript
// Problem: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
// Author: Chihung Yu
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var s = 0;
    var e = nums.length - 1;
    var min;

    while(s<e-1){
        var mid = s + parseInt((e-s)/2);

        if(nums[mid] < nums[s]){
            e = mid;
        } else if(nums[mid] > nums[e]) {
            s = mid;
        } else {
            return nums[s];
        }

    }

    return Math.min(nums[e], nums[s]);
};

// Another shorter solution;
var findMin = function(nums) {
    var i = 0;
    while(i < nums.length - 1 && nums[i] < nums[i + 1]) {
        i++;
    }
    return (i === nums.length - 1)? nums[0] : nums[i + 1]
};
