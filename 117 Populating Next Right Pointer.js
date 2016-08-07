// Follow up for problem "Populating Next Right Pointers in Each Node".

// What if the given tree could be any binary tree? Would your previous solution still work?

// Note:

// You may only use constant extra space.
// For example,
// Given the following binary tree,
//          1
//        /  \
//       2    3
//      / \    \
//     4   5    7
// After calling your function, the tree should look like:
//          1 -> NULL
//        /  \
//       2 -> 3 -> NULL
//      / \    \
//     4-> 5 -> 7 -> NULL
// Hide Company Tags Microsoft Bloomberg Facebook
// Hide Tags Tree Depth-first Search
// Hide Similar Problems (M) Populating Next Right Pointers in Each Node



/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if(!root) {
        return;
    }
    
    // leftEnd is used to track the current left most node
    var leftEnd = root;
    
    while(leftEnd !== null) {
        var cur = leftEnd;
        // dummy is used to point to the next level's leftEnd
        var dummy = new TreeLinkNode(0);
        var pre = dummy;
        // for each level we use leftEnd and leftEnd next to achieve level traversal
        while(cur !== null) {
            if(cur.left !== null) {
                pre.next = cur.left;
                pre = cur.left;
            }
            
            if(cur.right !== null) {
                pre.next = cur.right;
                pre = cur.right;
            }
            
            cur = cur.next;
        }
        
        leftEnd = dummy.next;
    }
};