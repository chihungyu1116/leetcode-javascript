// Leetcode #228 
// Language: Javascript
// Problem: https://leetcode.com/problems/summary-ranges/
// Author: Chihung Yu
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var index = 0;
    var result = [];

    while(index < nums.length){
        var r = nums[index];
        var c = index;
        
        while(index + 1 < nums.length && nums[index + 1] - nums[index] == 1){
            index++;
        }
        
        if(index > c){
            r = nums[c] + '->' + nums[index];
        }
        
        result.push(r + "");
        index++;
    }
    
    return result;
};