// Leetcode #237 
// Language: Javascript
// Problem: https://leetcode.com/problems/delete-node-in-a-linked-list/
// Author: Chihung Yu
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    if(node.next === null){
        return;
    }
    
    node.val = node.next.val;
    node.next = node.next.next;
};