// Leetcode #234
// Language: Javascript
// Problem: https://leetcode.com/problems/palindrome-linked-list/
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head === null || head.next === null){
        return true;
    }
    
    var slow = head;
    var fast = head;
    
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    var secondHead = slow.next;
    slow.next = null;
    
    var p1 = secondHead;
    var p2 = secondHead.next;
    
    while(p1 && p2){
        var temp = p2.next;
        p2.next = p1;
        p1 = p2;
        p2 = temp;
    }
    
    secondHead.next = null; // !important
    
    p = p1;
    q = head;
    
    while(p && q){
        if(p.val !== q.val){
            return false;
        }
        
        p = p.next;
        q = q.next;
    }
    
    return true;
}