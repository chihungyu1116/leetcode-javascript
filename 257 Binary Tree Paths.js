// Given a binary tree, return all root-to-leaf paths.

// For example, given the following binary tree:

//    1
//  /   \
// 2     3
//  \
//   5
// All root-to-leaf paths are:

// ["1->2->5", "1->3"]
// Credits:
// Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

// Hide Company Tags Google Apple Facebook
// Hide Tags Tree Depth-first Search
// Hide Similar Problems (M) Path Sum II

 /**
  * Definition for a binary tree node.
  * function TreeNode(val) {
  *     this.val = val;
  *     this.left = this.right = null;
  * }
  */
 /**
  * @param {TreeNode} root
  * @return {string[]}
  */

 var binaryTreePaths = function(root) {
     var res = [];
     
     function dfs(node, curr, res) {
         if(node === null) {
             return;
         }
         
         curr.push(node.val);
         
         if(node.left === null && node.right === null) {
             res.push(curr.join('->'));
         } else {
             dfs(node.left, curr, res);
             dfs(node.right, curr, res);
         }
         
         curr.pop();
     }
     
     dfs(root, [], res);
     
     return res;
 };