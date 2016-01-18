/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    var result = []
    
    if(!root) {
        return result;
    }
    
    var fromLeft = false;
    var curLvl = [];
    curLvl.push(root);

    var nextLvl = [];
    var temp = [];

    while(curLvl.length !== 0) {
        var p = curLvl.pop();
        temp.push(p.val);
        
        if(fromLeft) {
            if(p.left) {
                nextLvl.push(p.left);
            }
            if(p.right) {
                nextLvl.push(p.right);
            }
        } else {
            if(p.right) {
                nextLvl.push(p.right);
            }
            if(p.left) {
                nextLvl.push(p.left);
            }
        }
        
        if(curLvl.length === 0) {
            fromLeft = !fromLeft;
            result.push(temp);
            temp = [];
            curLvl = nextLvl;
            nextLvl = [];
        }
    }
    
    return result
};