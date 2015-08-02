// Leetcode #235
// Language: Javascript
// Problem: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
// Author: Chihung Yu
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root === null) {
        return root;
    }
    
    if(root === p || root === q) {
        return root;
    }
    
    if((root.val >= p.val && root.val <= q.val) || (root.val <= p.val && root.val >= q.val)){
        return root;
    }
    
    if(root.val > p.val && root.val > q.val){
        return lowestCommonAncestor(root.left, p, q);
    } else {
        return lowestCommonAncestor(root.right, p, q);
    }
};