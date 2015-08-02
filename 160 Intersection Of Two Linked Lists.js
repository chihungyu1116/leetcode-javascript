// Leetcode #160 
// Language: Javascript
// Problem: https://leetcode.com/problems/intersection-of-two-linked-lists/
// Author: Chihung Yu
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var lenA = getLen(headA);
    var lenB = getLen(headB);
    
    if(lenA === 0 || lenB === 0){
        return null;
    }
    
    while(lenA > lenB){
        headA = headA.next;
        lenA--;
    }
    
    while(lenB > lenA){
        headB = headB.next;
        lenB--;
    }

    while(lenA && lenB){
        if(headB === headA){
            return headA;
        }
        
        headA = headA.next;
        headB = headB.next;
    }

    return null;
};   

var getLen = function(head){
    var len = 0;
    
    while(head){
        head = head.next;
        len++;
    }
    
    return len;
}