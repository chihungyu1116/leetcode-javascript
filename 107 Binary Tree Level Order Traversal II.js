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
var levelOrderBottom = function(root) {
    var q = [];
    var result = [];
    var temp = [];
    
    if(root === null){
        return q;
    }
    
    q.push(root);
    
    var curLvlCnt = 1;
    var nextLvlCnt = 0;
    
    while(q.length !== 0){
        var p = q.shift();
        curLvlCnt--;
        temp.push(p.val);
        
        if(p.left !== null){
            q.push(p.left);
            nextLvlCnt++;
        }
        
        if(p.right !== null){
            q.push(p.right);
            nextLvlCnt++;
        }
        
        if(curLvlCnt === 0){
            curLvlCnt = nextLvlCnt;
            nextLvlCnt = 0;
            result.unshift(temp.slice());
            temp = [];
        }
    }
    
    return result;
};