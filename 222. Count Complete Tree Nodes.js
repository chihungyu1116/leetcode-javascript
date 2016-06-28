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
var countNodes = function(root) {
    return treeNodes(root);

    function treeNodes(node){
        if(!node){
            return 0;
        }else{
            var leftDepth = 0;
            var rightDepth = 0;
            var leftChild = node.left;
            while(leftChild){
                leftDepth++;
                leftChild = leftChild.left;
            }
            var rightChild = node.right;
            while(rightChild){
                rightDepth++;
                rightChild = rightChild.right;
            }
            if(leftDepth === rightDepth){
                return Math.pow(2, leftDepth + 1) - 1;
            }else{
                return treeNodes(node.left) + treeNodes(node.right) + 1;
            }
        }
    }
};