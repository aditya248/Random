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
var swapPairs = function(head) {
   
    if(!head || head.next === null){
        return head;
    }
   
    let temp = new ListNode(0);
    temp.next = head;
    let cureent = temp;
   
    while(cureent.next !== null && cureent.next.next !== null){
       
        let firstNode = cureent.next;
        let secondNode = cureent.next.next;
        firstNode.next = secondNode.next;
        cureent.next = secondNode;
        cureent.next.next = firstNode;
        cureent = cureent.next.next;
       
    }
   
    return temp.next;
};