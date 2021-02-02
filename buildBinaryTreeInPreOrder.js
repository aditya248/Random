/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    //Pre order(left) = Root L R
    //In order(down)  = L Root R
    
    return buildBinaryTree(0,0, inorder.length-1, preorder, inorder);
};

var buildBinaryTree = function(preStart, inStart, inEnd, preorder, inorder ) {
    
    if(preStart > preorder.length-1 || inStart > inEnd ) return null;
    
    let root = new TreeNode(preorder[preStart]);
    
    let rootIndex = 0;
    
    for(let i=inStart;i<=inEnd;i++){
        if(root.val === inorder[i]){
            rootIndex = i;
        }
    }
    
    root.left = buildBinaryTree(preStart+1,inStart, rootIndex-1,preorder,inorder);
    root.right = buildBinaryTree(preStart+rootIndex-inStart+1,rootIndex+1,inEnd,preorder,inorder);
    
    return root;
    
    
    
}




//
















var preIndex = 0;
var buildTree = function(preorder, inorder) {
    //Pre order(left) = Root L R
    //In order(down)  = L Root R
    let inOrderMap = new Map();
    for(let i=0;i<=inorder.length-1;i++){
        inOrderMap.set(inorder[i],i);
    }
    
    return buildBinaryTree(preorder, inorder, 0, inorder.length-1, inOrderMap);
};

var buildBinaryTree = function(preorder, inorder, start, end, inOrderMap) {
    
    if(start > end) return null;
    
    let root = new TreeNode(preorder[preIndex++]);
    
    if(root == null) return null;
    
    let rootIndex = inOrderMap.get(root.val);
    
    root.left = buildBinaryTree(preorder, inorder, start, rootIndex-1, inOrderMap);
    root.right = buildBinaryTree(preorder, inorder, rootIndex+1, end, inOrderMap);
    
    return root;
    
    
    
}