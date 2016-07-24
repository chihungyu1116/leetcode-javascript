// Given a binary tree, find the maximum path sum.

// For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path does not need to go through the root.

// For example:
// Given the below binary tree,

//        1
//       / \
//      2   3
// Return 6.


// http://bangbingsyb.blogspot.com/2014/11/leetcode-binary-tree-maximum-path-sum.html
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
var maxPathSum = function(root) {
    var maxVal = -Infinity;
    findMaxPath(root);
    return maxVal;
    
    function findMaxPath(node) {
        if(!node) {
            return 0;
        }
        
        var leftVal = Math.max(findMaxPath(node.left), 0);
        var rightVal = Math.max(findMaxPath(node.right), 0);
        
        var ps1 = node.val + Math.max(leftVal, rightVal);
        // ps2 means taking this current node as parent node and stop there
        var ps2 = node.val + leftVal + rightVal;
        
        // maxVal as if we end counting value here, what will be the maximum val
        // leftVal and rightVal can be negative values
        maxVal = Math.max.apply(null, [maxVal, ps1, ps2]);

        // return ps1 only since, ps2 cannot be combined with the parent node
        // leftVal and rightVal can be negative values, however, we can to see if combining with values down below can give higher number
        return ps1;
    }
};
