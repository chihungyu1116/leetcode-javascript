// Leetcode 129
// Language: Javascript
// Problem: https://leetcode.com/problems/sum-root-to-leaf-numbers/
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
 * @return {number}
 */
var sumNumbers = function(root) {
    var total = 0;

    if(root === null){
        return total;
    }
    
    var queue = [];
    queue.push(root);
    
    while(queue.length !== 0){
        var node = queue.shift();
        
        if(node.left === null && node.right === null){
            total += parseInt(node.val);
        }
        
        if(node.left){
            node.left.val = '' + node.val + node.left.val;
            queue.push(node.left);
        }
        if(node.right){
            node.right.val = '' + node.val + node.right.val;
            queue.push(node.right);
        }
    }
    
    return total;
};