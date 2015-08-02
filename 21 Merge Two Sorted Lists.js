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
var mergeTwoLists = function(l1, l2) {
    var p1 = l1;
    var p2 = l2;
    var fn = new ListNode(-1);
    var p = fn;
    
    
    while(p1 && p2){
        if(p1.val >= p2.val){
            p.next = p2;
            p2 = p2.next;
        } else {
            p.next = p1;
            p1 = p1.next;
        }
        p = p.next;
    }
    
    if(p1){
        p.next = p1;
    } else {
        p.next = p2;
    }
    
    return fn.next;
};