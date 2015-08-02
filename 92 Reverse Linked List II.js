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
    if(m === n){
        return head;
    }
    
    var step = n - m;
    var dummy = new ListNode(-1);
    dummy.next = head;
    var pre = head = dummy;
    
    while(m > 1){
        pre = pre.next;
        m--;
    }
    
    var cur = pre.next;
    var post = cur.next;
    
    if(step >= 1){
        while(step > 0 && post !== null){
            var temp = post.next;
            post.next = cur;
            cur = post;
            post = temp;
            step--;
        }
        
        temp = pre.next;
        pre.next = cur;
        temp.next = post;
    }
    
    // safeG = head;
    head = head.next;
    
    return head;
};