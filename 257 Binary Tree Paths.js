// Given a binary tree, return all root-to-leaf paths.

// For example, given the following binary tree:

//    1
//  /   \
// 2     3
//  \
//   5
// All root-to-leaf paths are:

// ["1->2->5", "1->3"]


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var result = [];
    
    if(root !== null) {
        traverse(root, [], result);
    }
    
    return result;
};

var traverse = function(node, path, result) {
    path.push(node.val);
    
    if(node.left || node.right) {
        if(node.left) {
            traverse(node.left, path, result);
            path.pop();
        }
    
        if(node.right) {
            traverse(node.right, path, result);
            path.pop();
        }   
        // path.pop()
    } else {
        result.push(path.join("->"));
    }
}