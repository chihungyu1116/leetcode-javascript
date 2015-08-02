// Leetcode #226 
// Language: Javascript
// Problem: https://leetcode.com/problems/invert-binary-tree/
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    var cur = root;
    
    generate(root);
    
    return cur;
};


var generate = function(root){
    if(!root){
        return null;
    }
    
    if(root.left === null && root.right === null){
        return root;
    }
    
    var temp = root.left;
    root.left = root.right;
    root.right = temp;
        
    invertTree(root.left);
    invertTree(root.right);
}
