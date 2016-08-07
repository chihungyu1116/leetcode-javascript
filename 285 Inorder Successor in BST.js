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
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    if(p.right) { // handle p = 14 or p = 27
        p = p.right;
        while(p.left) {
            p = p.left;
        }
        return p;
    }

    // if p has no right child
    
    //          20
    //       10       25
    //   6     14  22      27
    // 1    9
    //    8
    
    var succ = null;
    while(root !== p) {
        if(root.val > p.val) { // root is on the right hand side of p, handle case p = 1
            succ = root;
            root = root.left;
        } else if(root.val < p.val && root.right) { // handle case p = 8
            root = root.right;
        } else {
            break;
        }
    }
    return succ;
};