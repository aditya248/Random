/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
     let sum = 0;
    let maxSum = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + sum < nums[i]) {
            sum = nums[i];
        } else {
            sum += nums[i];
        }
        if (sum > maxSum) maxSum = sum;
    }
    return maxSum;
};