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