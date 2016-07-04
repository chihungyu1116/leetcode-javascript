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
        
        maxVal = Math.max(maxVal, Math.max(ps1, ps2));
        // return ps1 only since, ps2 cannot be combined with the parent node
        return ps1;
    }
};
