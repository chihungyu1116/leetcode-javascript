// http://bangbingsyb.blogspot.com/2014/11/leetcode-reverse-linked-list-ii.html

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if(m >= n) {
        return head;
    }
    
    var dummy = new ListNode(0);
    dummy.next = head;
    head = dummy;
    
    // move head to m - 1 node;
    for(var i = 0; i < m - 1; i++) {
        head = head.next;
    }
    
    var pre = head.next;
    var cur = pre.next;
    
    for(i = 0; i < n - m; i++) {
        var tmp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tmp;
    }
    
    // head.next still point to m
    head.next.next = cur;
    head.next = pre;
    
    return dummy.next; 
};