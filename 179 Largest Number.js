// Leetcode #179
// Language: Javascript
// Problem: https://leetcode.com/problems/largest-number/
// Author: Chihung Yu
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort(cmp);
    var result = nums.join('');
    
    return parseInt(result) === 0 ? '0' : result;
};

var cmp = function(a,b){
    return ('' + a + b) > ('' + b + a) ? -1 : 1;
}