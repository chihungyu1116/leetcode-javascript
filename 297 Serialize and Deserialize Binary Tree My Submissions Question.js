// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// For example, you may serialize the following tree

//     1
//    / \
//   2   3
//      / \
//     4   5
// as "[1,2,3,null,null,4,5]", just the same as how LeetCode OJ serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
// Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.

// Credits:
// Special thanks to @Louis1992 for adding this problem and creating all test cases.

// Hide Company Tags LinkedIn Google Uber Facebook Amazon Microsoft Yahoo Bloomberg
// Show Tags
// Show Similar Problems


/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
//  http://fisherlei.blogspot.com/2013/03/interview-serialize-and-de-serialize.html

// only pre order travesal can provide information about the root node
// the other technique that we can use is to use level order traversal
var serialize = function(root) {
    var result = [];
    serializer(root, result);
    
    return result.join(",");
};

var serializer = function(node, output) {
    if(node === null) {
        output.push("#");
        return;
    }
    
    output.push(node.val);
    serializer(node.left, output);
    serializer(node.right, output);
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    data = data.split(",");
    var index = 0;
   
    function deserializer(data) {
        if(index > data.length || data[index] === "#") {
            return null;
        }
        
        var node = new TreeNode(parseInt(data[index]));
        index++;
        node.left = deserializer(data);
        index++;
        node.right = deserializer(data);
        return node;
    }
    
    return deserializer(data);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// var serialize = function(root) {
//     if(!root) {
//         return "";
//     }
    
//     var result = [];
//     var curLvl = [];
//     var nextLvl = [];
//     curLvl.push(root);

//     while(curLvl.length) {
//         var node = curLvl.shift();
        
//         if(node) {
//             result.push(node.val);
            
//             if(node.left) {
//                 nextLvl.push(node.left);
//             } else {
//                 nextLvl.push(null);
//             }
            
//             if(node.right) {
//                 nextLvl.push(node.right);
//             } else {
//                 nextLvl.push(null);
//             }
//         } else {
//             result.push(null);
//         }
        
//         if(curLvl.length === 0) {
//             curLvl = nextLvl;
//             nextLvl = [];
//         }
//     }
    
//     console.log('serialize: ',result)
    
//     return result.join(',');
// };

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
// var deserialize = function(data) {
//     if(data === "") {
//         return null
//     }
    
//     data = data.split(',');
    
//     var val = data.shift();
//     var root = new TreeNode(val);
    
//     var curLvlCnt = 1;
//     var nextLvlCnt = 0;
//     var lvl = [];
//     lvl.push(root);

//     while(data.length) {
//         var node = lvl.shift();
//         curLvlCnt--;
        
//         var leftVal = data.shift();
//         var rightVal = data.shift();
        
//         if(leftVal) {
//             node.left = new TreeNode(leftVal);
//             nextLvlCnt++;
//             lvl.push(node.left);
//         } else {
//             node.left = null;
//         }
        
//         if(rightVal) {
//             node.right = new TreeNode(rightVal);
//             nextLvlCnt++;
//             lvl.push(node.right);
//         } else {
//             node.right = null;
//         }
        
//         if(curLvlCnt === 0) {
//             curLvlCnt = nextLvlCnt;
//             nextLvlCnt = 0;
//         }
//     }
    
//     console.log('deserialize: ',root)
    
//     return root;
// };

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 