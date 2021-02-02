/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(!height) return null;
    
    let totalWater = 0;
    let length = height.length;
    let leftmax = [];
    let rightMax = [];
    leftmax[0] = height[0];
    
    
for(let i =1; i<length; i++){
      leftmax[i] = Math.max(height[i], leftmax[i-1]);
}
    
    rightMax[length-1] = height[length-1];
    
    for(let i =length-2; i>=0; i--){
      rightMax[i] = Math.max(height[i], rightMax[i+1]);
}
    
        for(let i=1; i< length; i++){
            totalWater += Math.min(leftmax[i],rightMax[i]) - height[i];
}
    return totalWater;
    
};