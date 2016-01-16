// Leetcode 108 
// Language: Javascript
// Problem: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
// Author: Chihung Yu
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return generate(nums,0,nums.length-1);
};

var generate = function(nums, start, end){
    
    if(start > end){
        return null;
    }
    var midIndex = start + parseInt((end - start)/2);
    var midVal = nums[midIndex];
    
    var node = new TreeNode(midVal);
    node.left = generate(nums, start, midIndex-1);
    node.right = generate(nums, midIndex+1, end);
    
    return node;
}