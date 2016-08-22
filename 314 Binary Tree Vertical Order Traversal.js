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

var verticalOrder = function(root) {
    var res = [];
    
    if(root === null) {
        return res;
    }
    
    var hash = {};
    var queue = [];
    queue.push([root, 0]);
    var min = Infinity;
    var max = -Infinity;
    
    while(queue.length) {
        var len = queue.length;
        
        for(var i = 0; i < len; i++) {
            var pair = queue.shift();
            var node = pair[0];
            var order = pair[1];
            
            hash[order] = hash[order] || [];
            hash[order].push(node.val);
            
            min = Math.min(order, min);
            max = Math.max(order, max);
            
            if(node.left) {
                queue.push([node.left, order - 1]);
            }
            
            if(node.right) {
                queue.push([node.right, order + 1]);
            }
        }
    }
    
    while(min <= max) {
        if(hash[min].length) {
            res.push(hash[min]);
        }
        min++;
    }
    
    return res;
};