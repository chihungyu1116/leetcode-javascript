// Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1...n.

// For example,
// Given n = 3, your program should return all 5 unique BST's shown below.

//    1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3
// Hide Tags Tree Dynamic Programming
// Hide Similar Problems (M) Unique Binary Search Trees (M) Different Ways to Add Parentheses





/**
Given n, generate all structurally unique BST's (binary search trees) that store values 1...n.

For example,
Given n = 3, your program should return all 5 unique BST's shown below.

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
confused what "{1,#,2,3}" means? > read more on how binary tree is serialized on OJ.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) {
        return [];
    }
    
    return genTreeHelper(1, n);
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function genTreeHelper(start, end) {
    var result = [];
    
    if (start > end) {
        return [null];
    }

    
    
    for (var i = start; i <= end; i++) {
        // let node i becomes the center node and generate it's left and right nodes
        var left = genTreeHelper(start, i - 1);
        var right = genTreeHelper(i + 1, end);
        for (var k = 0; k < left.length; k++) {
            for (var j = 0; j < right.length; j++) {
                var node = new TreeNode(i);
                node.left = left[k];
                node.right = right[j];
                result.push(node);
            }
        }
    }
    
    return result;
}




console.log(generateTrees(2));