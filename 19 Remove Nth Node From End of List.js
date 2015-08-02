/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var n1 = new ListNode();
    var n2 = new ListNode();
    var dummy = n2;
    
    n1.next = head;
    n2.next = head;
    
    while(n > 0 && n1){
        n1 = n1.next;
        n--;
    }
    
    if(n > 0){
        return head;
    }
    
    while(n1 && n1.next){
        n1 = n1.next;
        n2 = n2.next;
    }
    
    n2.next = n2.next.next;
    
    return dummy.next;
};