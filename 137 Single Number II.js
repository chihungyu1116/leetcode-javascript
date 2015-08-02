// Leetcode 137
// Language: Javascript
// Problem: https://leetcode.com/problems/single-number-ii/
// Author: Chihung Yu
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    var singleNum = 0;
    
    for(var i = 0; i < 32; i++){
        var bit = 0;
        for(var j = 0; j < nums.length; j++){
            var num = nums[j];
            
            bit = (bit + ((num >> i) & 1)) % 3;
        }
        
        singleNum += bit << i;
    }
    
    return singleNum;
};