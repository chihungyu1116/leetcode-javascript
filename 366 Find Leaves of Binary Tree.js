// Given a binary tree, collect a tree's nodes as if you were doing this: Collect and remove all leaves, repeat until the tree is empty.

// Example:
// Given binary tree 
//           1
//          / \
//         2   3
//        / \     
//       4   5    
// Returns [4, 5, 3], [2], [1].

// Explanation:
// 1. Removing the leaves [4, 5, 3] would result in this tree:

//           1
//          / 
//         2          
// 2. Now removing the leaf [2] would result in this tree:

//           1          
// 3. Now removing the leaf [1] would result in the empty tree:

//           []         
// Returns [4, 5, 3], [2], [1].

// Credits:
// Special thanks to @elmirap for adding this problem and creating all test cases.

// Hide Company Tags LinkedIn
// Hide Tags Tree Depth-first Search



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var findLeaves = function(root) {
    var result = [];
    
    while(root) {
        var leaves = []
        root = removeLeaves(root, leaves);
        result.push(leaves);
    }
    
    return result;
};

function removeLeaves(node, leaves) {
    if(!node) {
        return null;
    }
    
    if(!node.left && !node.right) {
        leaves.push(node.val);
        return null;
    }
    
    node.left = removeLeaves(node.left, leaves);
    node.right = removeLeaves(node.right, leaves);
    
    return node;
}