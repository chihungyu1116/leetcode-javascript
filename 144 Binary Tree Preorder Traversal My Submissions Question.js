// Leetcode #144
// Language: Javascript
// Problem: https://leetcode.com/problems/binary-tree-preorder-traversal/
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
 * @return {number[]}
 */

// var preorderTraversal = function(root) {
//     var result = [];
    
//     traverse(root, result);
    
//     return result;
// };

// function traverse(node, result) {
//     if(!node) {
//         return;
//     }
    
//     result.push(node.val);
    
//     traverse(node.left, result);
//     traverse(node.right, result);
// }



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    var result = [];

    if(root === null) {
        return result;
    }
    
    var stack = [];
    stack.push(root);
    
    while(stack.length) {
        var node = stack.pop();
        result.push(node.val);
        
        if(node.right !== null) {
            stack.push(node.right);
        }
        if(node.left !== null) {
            stack.push(node.left);
        }
    }
    
    return result;
};

