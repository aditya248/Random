/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    //Edge cases
    if(nums.length<1){
        return 1;
    }
    
    // we can use hash/obj to sort the numbers array
    let myHash = new Map(); 
    
    // we will take off negative numbers when we create myHash
    for (let num of nums) {if (num > 0) myHash[num] = true};
    
    // myHash = { '0': true, '1': true, '2': true }
    
    // 1 is first positive integer
    let missing = 1; 
    
    
    for (missing; missing <= nums.length; missing++) {
        
     // if the [missing key] doesn't exit, then we return the number
        if (!myHash[missing]) {
            return missing;
        };
        
        // else we increment 1 then keep looping
    };
    
    // otherwise return 1 
    return missing; 
    
};



var firstMissingPositive = function(nums) {
    if (nums.length <= 1)  return nums[0] == 1 ? 2 : 1;    
  
    const max = Math.max(...nums);
    for (let i = 1; i <= max + 1; i++) {
        if (!nums.includes(i)) return i;
        //alternatively: if (nums.indexOf(i) === -1) return i;
    }    
    return 1; //every other case, ie all n in nums are < 0
  };