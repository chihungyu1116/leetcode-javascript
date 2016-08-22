// Leetcode #206
// Language: Javascript
// Problem: https://leetcode.com/problems/reverse-linked-list/
// Author: Chihung Yu


// Reverse a singly linked list.

// Uber Facebook Twitter Zenefits Amazon Microsoft Snapchat Apple Yahoo Bloomberg Yelp Adobe
// Show Tags
// Show Similar Problems

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var curr = head;
    var prev = null;
    
    while(curr) {
        var next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next; 
    }
    
    return prev;
};