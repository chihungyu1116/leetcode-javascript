// The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

// Determine the maximum amount of money the thief can rob tonight without alerting the police.

// Example 1:
//      3
//     / \
//    2   3
//     \   \ 
//      3   1
// Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
// Example 2:
//      3
//     / \
//    4   5
//   / \   \ 
//  1   3   1
// Maximum amount of money the thief can rob = 4 + 5 = 9.

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
var rob = function(root) {
    var result = robViaDfs(root);
    return Math.max.apply(null, result);
};


// Array[0] max money when root is selected
// Array[1] max money when root is Not selected
function robViaDfs(root) {
    if (!root) {
        return [0, 0];
    }
    
    var left = robViaDfs(root.left),
        right = robViaDfs(root.right),
        includeRoot,
        notIncludeRoot;
    
    includeRoot = left[1] + right[1] + root.val; // array[1] is value from before of not including root
    notIncludeRoot = Math.max.apply(null, left) + Math.max.apply(null, right);
    
    return [includeRoot, notIncludeRoot];
}
