/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 
var partition = function(head, x) {
    var p = new ListNode(x-1);
    p.next = head;
    head = p;
    var pre;
    
    while(p !== null && p.val < x){ // since we initialize it with x - 1
        pre = p;
        p = p.next;
    }
    
    if(p !== null){
        var cur = pre;
        while(p !== null){
            if(p.val < x){
                var temp = cur.next;
                pre.next = p.next;
                cur.next = p;
                cur = p;
                p.next = temp;
                p = pre;
            }
            pre = p;
            p = p.next;
        }
    }
    
    temp = head;
    head = head.next;
    
    return head;
};