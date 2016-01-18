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
var deleteDuplicates = function(head) {
    var root = new ListNode(-1);
    
    root.next = head;
    var pre = head = root;

    while(pre) {
        var cur = pre.next;
        var isDup = false;
        
        while(cur && cur.next && cur.val === cur.next.val) {
            isDup = true;
            var next = cur.next;
            cur.next = next.next;
            next.next = null;
        }
        
        if(isDup) {
            pre.next = cur.next;
            cur.next = null;
            continue;
        }
        
        pre = cur;
    }
    
    return root.next;
};