/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head === null || k === 0){
        return head;
    }
    
    var dummy = new ListNode(-1);
    dummy.next = head;
    var p = head;
    
    var len = 1;
    
    while(p.next !== null){
        len++;
        p = p.next;
    }
    
    k = len - k%len;
    p.next = head;
    
    while(k > 0){
        p = p.next;
        k--;
    }
    
    head = p.next;
    p.next = null;
    return head;
};