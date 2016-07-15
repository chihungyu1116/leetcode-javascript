// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

// Credits:
// Special thanks to @ifanchu for adding this problem and creating all test cases. Also thanks to @ts for adding additional test cases.

// Hide Company Tags LinkedIn Airbnb
// Show Tags
// Show Similar Problems



// Leetcode #198
// Language: Javascript
// Problem: https://leetcode.com/problems/house-robber/
// Author: Chihung Yu
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums === null){
        return nums;
    }
    
    var even = 0;
    var odd = 0;
    
    for(var i = 0; i < nums.length; i++){
        if(i%2 === 0){
            even = Math.max(even + nums[i], odd);
        } else {
            odd = Math.max(odd + nums[i], even);
        }
    }
    
    return Math.max(even,odd);
};


// var rob = function(nums) {
//     var dp = [];
    
//     if(!nums || nums.length === 0) {
//         return 0;
//     }
//     // dp[i] is the max amount can rob on ith house
    
//     for(var i = 0; i < nums.length; i++){
//         var num = nums[i];
//         dp[i] = Math.max((dp[i-2] || 0) + num, (dp[i-1] || 0));
//     }
    
//     return dp[nums.length - 1];
// };

