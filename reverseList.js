var reverseList = function(head) {
    let previous = null;
    while(head) {
        let temp = head;
        head = head.next;
        temp.next = previous;
        previous = temp;
    }
    return previous;
    
};