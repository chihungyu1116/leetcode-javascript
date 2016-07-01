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
    var map = {};
    var queue = [];
    var res = [];
    // since iterating over map cannot ensure order
    // we store min and max index for enforcing that
    var minIdx = Infinity;
    var maxIdx = -Infinity;
    
    if(root === null) {
        return res;
    }
    
    queue.push([0, root]);
    while(queue.length > 0) {
        var len = queue.length;
        
        for(var i = 0; i < len; i++) {
            var data = queue.shift();
            var cur = data[1];
            var idx = data[0];
            
            if(idx < minIdx) {
                minIdx = idx;
            }
            if(idx > maxIdx) {
                maxIdx = idx;
            }
            
            map[idx] = map[idx] || [];
            map[idx].push(cur.val);
            
            if(cur.left) {
                queue.push([idx - 1, cur.left]);
            }
            if(cur.right) {
                queue.push([idx + 1, cur.right]);
            }
        }
    }
    // since iterating over map cannot ensure order
    for(i = minIdx; i <= maxIdx; i++) {
        var key = i.toString();
        
        if(map[key]) {
            res.push(map[key]);
        }
    }
    
    return res;
};