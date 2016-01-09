// Leetcode 268
// Language: Javascript
// Problem: https://leetcode.com/problems/missing-number/
// Author: Chihung Yu
/**
 * @param {number[]} nums
 * @return {number}
 */

 var missingNumber = function(nums) {
    var res = 0;
    
    // nums = [0, 1, 3, 4, 5]
    // index go from 1 to 5
    // res starts with 0
    // perform xor so that index and num will cancel out leaving the odd num alone
    for(var i = 1; i <= nums.length; i++) {
        res = res ^ i ^ nums[i - 1];
    }
 
    return res;
};