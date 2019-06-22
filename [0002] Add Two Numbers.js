// You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

//  Amazon Microsoft Bloomberg Airbnb Adobe

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */



// value reverse helps to asslign the first digit or both linklist
var addTwoNumbers = function(l1, l2) {
    const answer = new ListNode(0);
    var node = answer;
    var carry = 0;
    while(l1 !== null || l2 !== null || carry !== 0) {
        var val = 0;
        if (carry !== 0) {
            val += carry;
        }
        carry = 0;
        if (l1 !== null) {
            val += l1.val;
        }
        if (l2 !== null) {
            val += l2.val;
        }
        if (val > 9) {
            val -= 10;
            carry = 1;
        }
        node.next = new ListNode(val);
        node = node.next;
        if (l1 !== null) {
            l1 = l1.next;
        }
        if (l2 !== null) {
            l2 = l2.next;
        }
    }

    return answer.next;
};
