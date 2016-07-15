// For example:
// Given the following binary tree,
//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---
// You should return [1, 3, 4].


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
var rightSideView = function(root) {
    var result = [];
    
    if(root === null) {
        return result;
    }
    
    queue = [];
    queue.push(root);
    
    while(queue.length > 0) {
        var len = queue.length;
        
        for(var i = 0; i < len; i++) {
            var node = queue.shift();
            
            if(node.left) {
                queue.push(node.left);
            }
            
            if(node.right) {
                queue.push(node.right);
            }
            
            if(i === len - 1) {
                result.push(node.val);
            }
        }
    }
    
    return result;
};