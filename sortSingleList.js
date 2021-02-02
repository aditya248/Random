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
var sortList = function(head) {
   
    if(!head || head.next == null) return head;
   
    // Get the list middle
    let temp = head;
    let fast = head;
    let slow = head;
   
    while(fast != null && fast.next !=null){
        temp = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
   
    temp.next = null;
   
    let left = sortList(head,temp);
    let right = sortList(slow,fast);
   
    return  merge(left,right);  
};

var merge = function(left,right) {
    let merged = new ListNode(0);
    let currentNode = merged;
       
    while(left != null && right != null){
       
        if(left.val < right.val){
            currentNode.next = left;
            left = left.next;
        }
       
        else{
            currentNode.next = right;
            right = right.next;
        }
        currentNode = currentNode.next;
    }
   
    currentNode.next = left || right;
   
    return merged.next;
   