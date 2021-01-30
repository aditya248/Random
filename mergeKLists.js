var mergeKLists = function(lists) {
    
    if(lists.length == 0){
        return null;
    }
    while(lists.length>1){
          
        let listA = lists.shift();
        let listB = lists.shift();
        lists.push(mergeSortTwoLists(listA, listB));      
    }
    
    return lists[0];
};

var mergeSortTwoLists = function(listA, listB) {
    
    let temp = new ListNode(0);
    let current = temp;
    
    while(listA !== null && listB !== null){
        if(listA.val < listB.val){
            current.next = listA;              
            listA = listA.next;            
        }
        else{
            current.next = listB;              
            listB = listB.next;  
        }
        current =  current.next;
    }
    
    current.next = listA ||listB;
    
    return temp.next;
    
}

//Alternate solution - Put all the values in the priorty queue min heap -> remove and add o linked list.