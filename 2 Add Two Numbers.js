// You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

//  Amazon Microsoft Bloomberg Airbnb Adobe

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */



// value reverse helps to asslign the first digit or both linklist

var addTwoNumbers = function(l1, l2) {
    if(l1 === null || l2 === null){
        return l1 || l2;
    }
    
    var result = new ListNode(0);
    var cur = result;
    var p = l1;
    var q = l2;
    var carry = 0;
    
    while(p || q){
        var qval;
        var pval;
        
        if(q){
            qval = q.val;
            q = q.next;
        } else {
            qval = 0;
        }
        
        if(p){
            pval = p.val;
            p = p.next;
        } else {
            pval = 0;
        }
        
        var val = qval + pval + carry;
        
        if(val > 9){
            carry = 1;
            val %= 10;
        } else {
            carry = 0;
        }
        
        cur.next = new ListNode(val);
        cur = cur.next;
    }
    
    if(carry !== 0){
        cur.next = new ListNode(1);
    }
    
    return result.next;
    
};