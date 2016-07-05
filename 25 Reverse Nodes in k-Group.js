
// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

// If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

// You may not alter the values in the nodes, only nodes itself may be changed.

// Only constant memory is allowed.

// For example,
// Given this linked list: 1->2->3->4->5

// For k = 2, you should return: 2->1->4->3->5

// For k = 3, you should return: 3->2->1->4->5


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

 // http://www.geeksforgeeks.org/reverse-a-list-in-groups-of-given-size/
var reverseKGroup = function(head, k) {
    var cur = head;
    var pre = null;
    var post = null;
    var count = 0;
    
    while(cur !== null && count < k) {
        cur = cur.next;
        count++;   
    }
    
    if(count !== k) {
        return head;
    }
    
    cur = head;

    while(cur !== null && count > 0) {
        post = cur.next;
        cur.next = pre;
        pre = cur;
        cur = post;
        count--;
    }
    
    // post is now a pointer to (k+1)th node
    // recursively call for the list starting from cur
    if(post !== null) {
        head.next = reverseKGroup(post, k);
    }
    
    return pre;
};