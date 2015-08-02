/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(inorder === null || postorder === null){
        return null;
    }
    
    if(inorder.length !== postorder.length){
        return null;
    }
    
    return generate(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
};

var generate = function(inorder, il, ir, postorder, pl, pr){
    if(il > ir || pl > pr){
        return null;
    }
    
    var rootVal = postorder[pr];
    var root = new TreeNode(rootVal);
    var rootIndex = -1;
    
    for(var i = il; i <= ir; i++){
        var nodeVal = inorder[i];
        if(nodeVal === rootVal){
            rootIndex = i;
            break;
        }
    }
    
    if(rootIndex === -1){
        return null;
    }
    
    var leftTreeSize = rootIndex - il;
    var rightTreeSize = ir - rootIndex;
    
    root.left = generate(inorder, il, rootIndex - 1, postorder, pl, pl + leftTreeSize - 1);
    root.right = generate(inorder, rootIndex + 1, ir, postorder, pr - rightTreeSize, pr - 1);
    
    return root;
}