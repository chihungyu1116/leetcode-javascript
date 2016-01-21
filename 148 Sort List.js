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
 
var sortList = function(head) {
    if(head === null) {
        return null;
    }
    
    var len = 0;
    var p = head;
    
    while(p) {
        len++;
        p = p.next;
    }
    
    var newHead = sort(len);
    
    return newHead;
    
    function sort(len) {
        if(len === 1) {
            var temp = head;
            head = head.next;
            temp.next = null;
            return temp;
        }
        
        var leftHead = sort(parseInt(len/2));
        var rightHead = sort(len - parseInt(len/2));
        var newHead = merge(leftHead, rightHead);
        
        return newHead;
    }
    
    function merge(first, second) {
        var h = new ListNode(-1);
        var cur = h;
    
        while(first && second) {
            
            
            if(first.val <= second.val) {
                cur.next = first;
                first = first.next;
            } else {
                cur.next = second;
                second = second.next;
            }
            
            cur = cur.next;
        }
        
        if(first) {
            cur.next = first;
        }
        
        if(second) {
            cur.next = second;
        }
        
        cur = h.next;
        h.next = null;
        return cur;
    }
};