// Leetcode #199
// Language: Javascript
// Problem: https://leetcode.com/problems/binary-tree-right-side-view/
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    var answer = [];

    if(root === null){
        return answer;
    }

    var queue = [];
    queue.push(root);
    var curLvlCnt = queue.length;
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
        
        if(curLvlCnt <= 0){
            answer.push(node.val);
            curLvlCnt = nextLvlCnt;
            nextLvlCnt = 0;
        }
        
    }
    
    return answer;
}