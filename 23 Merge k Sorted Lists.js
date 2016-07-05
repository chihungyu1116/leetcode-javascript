// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
// http://www.cnblogs.com/springfor/p/3869217.html
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    return mergeHelper(lists, 0, lists.length - 1);
};

function mergeHelper(lists, l, r) {
    if(l === r) {
        return lists[l];
    }
    
    if(l > r) {
        return null;
    }
    
    var mid = Math.floor((l + r)/2);
    var left = mergeHelper(lists, l, mid);
    var right = mergeHelper(lists, mid + 1, r);
    
    return mergeTwoLists(left, right);
}


function mergeTwoLists(l1, l2) {
    var dummy = new ListNode(0);
    var cur = dummy;
    
    while(l1 && l2) {
        if(l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        
        cur = cur.next;
    }
    
    if(l1) {
        cur.next = l1;
    }
    
    if(l2) {
        cur.next = l2;
    }
    
    return dummy.next;
}