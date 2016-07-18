// Given a binary tree where all the right nodes are either leaf nodes with a sibling (a left node that shares the same parent node) or empty, flip it upside down and turn it into a tree where the original right nodes turned into left leaf nodes. Return the new root.

// For example:
// Given a binary tree {1,2,3,4,5},
//     1
//    / \
//   2   3
//  / \
// 4   5
// return the root of the binary tree [4,5,2,#,#,3,1].
//    4
//   / \
//  5   2
//     / \
//    3   1  
// confused what "{1,#,2,3}" means? > read more on how binary tree is serialized on OJ.

// Hide Company Tags LinkedIn
// Hide Tags Tree
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
 * @return {TreeNode}
 */
var upsideDownBinaryTree = function(root) {
    var newRoot = root;
    
    generateUpsideDownHelper(root);
    
    function generateUpsideDownHelper(root) {
        if(!root) {
            return root;
        }
        
        if(!root.left && !root.right) {
            newRoot = root;
            return root;
        }
    
        if(root.left) {
            var ret = generateUpsideDownHelper(root.left);
            ret.left = root.right;
            ret.right = root;
            root.left = null;
            root.right = null;
        }
        
        return root;
    }
    return newRoot;
};


// simpler solution
var upsideDownBinaryTree = function(root) {
    // second condition ensure the left most child will be the new root
    if (!root || (!root.left && !root.right)) {
        return root;
    }
    
    let newRoot = upsideDownBinaryTree(root.left);
    console.log(newRoot.val, root.left)
    
    root.left.left = root.right;
    root.left.right = root;

    // cannot work if we sub root.left with newRoot
    // since new root is always the left most child
    // [doesn't work] newRoot.left = root.right;
    // [doesn't work] newRoot.right = root;
    
    root.left = null;
    root.right = null;
    
    return newRoot;
};
