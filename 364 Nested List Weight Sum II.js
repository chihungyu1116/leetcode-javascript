// Given a nested list of integers, return the sum of all integers in the list weighted by their depth.

// Each element is either an integer, or a list -- whose elements may also be integers or other lists.

// Different from the previous question where weight is increasing from root to leaf, now the weight is defined from bottom up. i.e., the leaf level integers have weight 1, and the root level integers have the largest weight.

// Example 1:
// Given the list [[1,1],2,[1,1]], return 8. (four 1's at depth 1, one 2 at depth 2)

// Example 2:
// Given the list [1,[4,[6]]], return 17. (one 1 at depth 3, one 4 at depth 2, and one 6 at depth 1; 1*3 + 4*2 + 6*1 = 17)

// Hide Company Tags LinkedIn
// Show Tags
// Show Similar Problems

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function(nestedList) {
    
    function getDepth(arr, lvl) {
        var maxDepth = lvl;
        
        for(var i = 0; i < arr.length; i++) {
            if(!arr[i].isInteger()) {
                // maxDepth represents the max depth at that level, 
                // e.g. [[[[55]]],[[31]],[99],[],75]
                // at lvl 1, we want to know which [[[55]]], [[31]], [99], [], 75
                // has the maxDepth
                maxDepth = Math.max(maxDepth, getDepth(arr[i].getList(), lvl + 1));
            }
        }
        
        return maxDepth;
    }
        
    var depth = getDepth(nestedList, 1);
    
    function traverse(arr, lvl) {
        var sum = 0;
        
        for(var i = 0; i < arr.length; i++) {
            if(arr[i].isInteger()) {
                sum += arr[i].getInteger()*lvl;
            } else {
                sum += traverse(arr[i].getList(), lvl - 1);
            }
        }
        
        return sum;
    }
    
    return traverse(nestedList, depth);
};