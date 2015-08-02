// Leetcode 116
// Language: Javascript
// Problem: https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
// Author: Chihung Yu
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if(root === null){
        return;
    }
    
    if(root.left){
        root.left.next = root.right;
    }
    
    if(root.right){
        root.right.next = (root.next === null) ? null : root.next.left
    }
    
    connect(root.left);
    connect(root.right);
};