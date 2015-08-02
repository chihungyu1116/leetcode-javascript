// Leetcode 110
// Language: Javascript
// Problem: https://leetcode.com/problems/balanced-binary-tree/
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
 * @return {boolean}
 */
 
var maxHeight = function(node){
    if(node === null){
        return 0;
    }
    
    return 1 + Math.max(maxHeight(node.left), maxHeight(node.right));
}

var minHeight = function(node){
    if(node === null){
        return 0;
    }
    
    return 1 + Math.min(minHeight(node.left), minHeight(node.right));
}


var height = function(node){
    if(node === null){
        return 0;
    }
    
    return 1 + Math.max(height(node.left), height(node.right));
}
 
var isBalanced = function(root) {
    if(root === null){
        return true;
    }
    
    // var maxh = maxHeight(root);
    // var minh = minHeight(root);
    
    // return Math.abs(maxh - minh) <= 1;
    
    var lh = height(root.left);
    var rh = height(root.right);
    
    var diff = Math.abs(lh - rh);
    
    if(diff <= 1){
        return isBalanced(root.left) && isBalanced(root.right);
    } else {
        return false;
    }
};