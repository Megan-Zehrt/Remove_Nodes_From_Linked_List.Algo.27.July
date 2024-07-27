// Remove Nodes from Linked List



// You are given the head of a linked list.
// Remove every node which has a node with a greater value anywhere to the right side of it.
// Return the head of the modified Linked List.







/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var removeNodes = function(head) {
    
    if(!head) return head  // if not head return head

    removeNodes(head.next)

    if(head.val < (head?.next?.val || 0 )){
        head.val = head.next.val
        head.next = head.next.next
    }

    return head

    
};