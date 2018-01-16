// Leetcode #141
// Language: Javascript
// Problem: https://leetcode.com/problems/linked-list-cycle/
// Author: Chihung Yu
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function(head) {
//     if(head === null || head.next === null){
//         return false;
//     }
    
//     var faster = head.next;
//     var slower = head;
    
//     while(faster && slower){
//         if(faster.val === slower.val){
//             return true;
//         }
//         faster = faster.next;
        
//         if(faster === null){
//             return false;
//         } else {
//             faster = faster.next;
//         }
        
//         slower = slower.next;
//     }
    
//     return false;
// };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null) {
        return false;
    }

    var node1 = head;
    var node2 = head;
    node2 = node2.next;
    
    while(node1 !== null && node2 !== null) {
        if (node1.val === node2.val) {
            return true;
        }

        node1 = node1.next;
        node2 = node2.next;
        
        if (node2 !== null) {
            node2 = node2.next;
        }
        
        
    }
    
    return false;
};