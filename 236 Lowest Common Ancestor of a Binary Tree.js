// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

//         _______3______
//        /              \
//     ___5__          ___1__
//    /      \        /      \
//    6      _2       0       8
//          /  \
//          7   4
// For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3. Another example is LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

// Hide Company Tags Amazon LinkedIn Apple Facebook Microsoft
// Show Tags
// Show Similar Problems



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

// Amazon LinkedIn Apple Facebook Microsoft
// Hide Tags Tree
// Hide Similar Problems
 
// reference: http://www.cnblogs.com/anne-vista/p/4815076.html
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


// second attempt

var lowestCommonAncestor = function(root, p, q) {
    if(root === null || root === p || root === q) {
        return root;
    }
    
    var left = lowestCommonAncestor(root.left, p, q);
    var right = lowestCommonAncestor(root.right, p, q);
    
    if(left !== null && right !== null) {
        return root;
    }
    
    return left || right;
};