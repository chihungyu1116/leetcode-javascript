// Leetcode 111
// Language: Javascript
// Problem: https://leetcode.com/problems/minimum-depth-of-binary-tree/
// Author: Chihung Yu
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
var minDepth = function(root) {
    if(root === null){
        return 0;
    }
    
    var queue = [];
    
    queue.push(root);
    
    var height = 1;
    
    var curLvlCnt = 1;
    var nextLvlCnt = 0;
    
    while(queue.length !== 0){
        var node = queue.shift();
        
        curLvlCnt--;
        
        if(node.left){
            queue.push(node.left);
            nextLvlCnt++;
        }
        if(node.right){
            queue.push(node.right);
            nextLvlCnt++;
        }
        
        if(node.left === null && node.right === null){
            return height;
        }
        
        if(curLvlCnt === 0){
            height++;
            curLvlCnt = nextLvlCnt;
            nextLvlCnt = 0;
        }
    }
    
    return height;
};