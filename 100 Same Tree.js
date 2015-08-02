/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    var queue1 = [];
    var queue2 = [];
    
    queue1.push(p);
    queue2.push(q);
    
    while(queue1.length && queue2.length){
        var node1 = queue1.shift();
        var node2 = queue2.shift();
        var val1;
        var val2;
        
        
        if(node1 === null){
            val1 = null;
        } else {
            val1 = node1.val;
            queue1.push(node1.left);
            queue1.push(node1.right);
        }
        
        if(node2 === null){
            val2 = null;
        } else {
            val2 = node2.val;
            queue2.push(node2.left);
            queue2.push(node2.right);
        }
        
        if(val1 !== val2){
            return false;
        }
    }
    
    return queue1.length === queue2.length;
};
