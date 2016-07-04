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
var postorderTraversal = function(root) {
    var result = [];
    var stack = [];
    var prev = null;
    var curr = null;
    
    if(root === null) {
        return result;
    }
    
    stack.push(root);
    
    // use prev and curr to figure out the direction of tree traversal
    while(stack.length !== 0) {
        curr = stack[stack.length - 1];
        
        if(prev === null || prev.left === curr || prev.right === curr) { // traverse down the tree
            if(curr.left !== null) {
                stack.push(curr.left);
            } else if(curr.right !== null) {
                stack.push(curr.right);
            }
        } else if(curr.left === prev) { //traverse up the tree from the left
            if(curr.right !== null) {
                stack.push(curr.right);
            }
        } else {
            // it means that curr === prev 
            result.push(curr.val);
            stack.pop();
        }
        
        prev = curr;
    }
    
    return result;
};