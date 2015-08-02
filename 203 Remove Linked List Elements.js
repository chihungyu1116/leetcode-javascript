// Leetcode #203
// Language: Javascript
// Problem: https://leetcode.com/problems/remove-linked-list-elements/
// Author: Chihung Yu
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head === null){
        return head;
    }
    
    var dummy = new ListNode(-1);
    dummy.next = head;
    prev = dummy;
    cur = head;
    
    while(prev !== null && prev.next !== null){
        if(cur.val === val) {
            prev.next = cur.next;
            cur = prev.next;
        } else {
            prev = cur;
            cur = cur.next;
        }
    }
    
    return dummy.next;
};