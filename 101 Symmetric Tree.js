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
var isSymmetric = function(root) {
    if(root === null){
        return true;
    }
    
    var queue = [];
    queue.push(root);
    
    var temp = [];
    var curCnt = 1;
    var nextCnt = 0;

    while(queue.length !== 0){
        var p = queue.shift();
        
        if(p !== null){
            temp.push(p.left);
            temp.push(p.right);
        }
        
        if(queue.length === 0){
            if(isPalindrome(temp)){
                queue = temp;
                temp = [];
            } else {
                return false;
            }
        }
    }
    
    return true;
};


var isPalindrome = function(arr){
    var head = 0;
    var tail = arr.length - 1;
    
    while(head < tail){
        if(arr[head] && arr[tail]){
            if(arr[head].val !== arr[tail].val){
                return false;
            }
        } else if(arr[head] || arr[tail]){
            return false;
        }
        
        head++;
        tail--;
    }
    
    return true;
}