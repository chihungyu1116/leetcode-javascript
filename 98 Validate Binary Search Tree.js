/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return validate(root, -Infinity, Infinity);
};

var validate = function(node, min, max){
    if(node === null){
        return true;
    }
    
    if(node.val <= min || node.val >= max){
        return false;
    }
    return validate(node.left,min,node.val) && validate(node.right,node.val,max);
}