/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 
//  http://www.cnblogs.com/anne-vista/p/4815076.html
var lowestCommonAncestor = function(root, p, q) {
    if(root === null || root === p || root === q) {
        return root;
    }
    
    var l = lowestCommonAncestor(root.left, p, q);
    var r = lowestCommonAncestor(root.right, p, q);
    
    if(l !== null && r !== null) {
        // p and q are on two different side of root node.
        return root;
    }
    
    return (l !== null) ? l : r; // either one of p, q is on one side OR p, q is not in l&r subtrees
};
