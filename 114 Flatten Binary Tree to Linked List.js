// Leetcode 114
// Language: Javascript
// Problem: https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    var stack = [];
    var p = root;

    while(p !== null || stack.length !== 0){
        if(p.right  !== null){
            stack.push(p.right);
        }

        if(p.left !== null){ // [!!!]point of confusing, if null then pop stack
            p.right = p.left;
            p.left = null;
        } else if(stack.length !== 0){
            var node = stack.pop();
            p.right = node;
        }

        p = p.right;
    }
};

// Recursive solution

var flatten = function(root) {
    if(root === null || (root.left === null && root.right === null)) {
        return;
    }

    var rootLeft = root.left;
    var rootRight = root.right;
    root.left = null;
    root.right = null;

    flatten(rootLeft);
    flatten(rootRight);

    root.right = rootLeft;

    var aux = root;
    while(aux !== null && aux.right !== null) {
        aux = aux.right;
    }
    aux.right = rootRight;
};
