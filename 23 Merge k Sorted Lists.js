// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
// http://www.cnblogs.com/springfor/p/3869217.html

// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

// Hide Company Tags LinkedIn Google Uber Airbnb Facebook Twitter Amazon Microsoft
// Hide Tags Divide and Conquer Linked List Heap
// Hide Similar Problems (E) Merge Two Sorted Lists (M) Ugly Number II

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
    
    function merge(beg, end, lists) {
        if(beg > end) {
            return [];
        }
        
        if(beg === end) {
            return lists[beg];
        }
        
        var mid = beg + Math.floor((end - beg)/2);
        var left = merge(beg, mid, lists);
        var right = merge(mid + 1, end, lists);
        
        return mergeTwoLists(left, right);
    }
    
    function mergeTwoLists(list1, list2) {
        var head = new ListNode(0);
        var tmp = head;
        
        while(list1 && list2) {
            if(list1.val < list2.val) {
                tmp.next = list1;
                list1 = list1.next;
            } else {
                tmp.next = list2;
                list2 = list2.next;
            }
            
            tmp = tmp.next;
        }
        
        if(list1) {
            tmp.next = list1;
        } else if(list2) {
            tmp.next = list2;
        }
        
        tmp = head.next;
        head.next = null;
        
        return tmp;
    }
    
    return merge(0, lists.length - 1, lists);
};