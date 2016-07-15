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
 
// !!! we can concat two list together than use merge sort to sort the merged list

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
        // there will be no case of len = 0 which is caused by 1/2
        if(len === 1) {
            var temp = head;
            // !!! important: moving pointer to the next
            // e.g. 1->2->3->4
            // head-> 1
            // now head will be point to 2
            head = head.next; 
            temp.next = null;
            return temp;
        }
        // there will be no case of len = 0 which is caused by 1/2
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