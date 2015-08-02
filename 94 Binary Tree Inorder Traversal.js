/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 
var inorderTraversal = function(root) {
    var result = [];
    
    if(root === null){
        return result;
    }
    

    var stack = [];
    var cur = root;
    
    while(true){
        while(cur !== null){
            stack.push(cur);
            cur = cur.left;
        }
        
        if(stack.length === 0){
            break;
        }
        
        cur = stack.pop();
        result.push(cur.val);
        cur = cur.right;
    }
    
    return result;
};