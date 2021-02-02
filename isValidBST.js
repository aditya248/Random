//BST - inorder gives sorted
var isValidBST = function(root) {
    let stack = [];
    let prev = -Infinity;
    
    //Add all the left nodes
    function push(node){
        while(node){
        stack.push(node);
        node = node.left;
        } 
    }
    
    
    function collect(){
        let top;
        while(top = stack.pop()){
        if(top <= prev) return false;
        prev = top.val;
        if(top.right){
            push(top.right);
        }
        }
        return true;
    }
    
    push(root);
    return collect();
    
    

    
};

///////
/
/
/
/
/
/
////////
    let preNodeVal = -Infinity;
    return checkValid(root);
    
    function checkValid(node) {
        if(!node){
            return true;
        }
        if(!checkValid(node.left)){
            return false;
        }
        if(preNodeVal >= node.val){
            return false;
        }
        preNodeVal = node.val;
        return checkValid(node.right);
    }


    ///////
/
/
/
/
/
/
////////



var isValidBST = function(root) {
    let stack = [];
    let curr = root;
    let prev = -Infinity;
    
    while(curr || stack.length){
         while(curr){
             stack.push(curr);
             curr = curr.left;
         }
        
        curr = stack.pop();
        if(curr.val <= prev) return false;
        prev = curr.val;
        curr = curr.right;
    }
    
    return true;
};