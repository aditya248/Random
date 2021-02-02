/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    let len1 = nums1.length;
    let len2 = nums2.length;
    let len = len1 + len2 ;
    
    let isEven = len%2 == 0;
    if(len == 0) return null;
    
    let sortedArray = mergeSortedArray(nums1,nums2,len1,len2);
    return calculateMedian(sortedArray, isEven, len);
};

var mergeSortedArray = function(num1,num2,l1,l2){
    let i1=0;
    let i2=0;
    let sortedArray = [];
    
    if(!num1 & num1.length > 0){
        return nums2;
    }
    
    if(!num2 & num2.length > 0){
        return nums1;
    }
    
    
    while(i1<l1 && i2<l2){
        if(num1[i1] <= num2[i2]){
            sortedArray.push(num1[i1]);
            i1++;
        }
        else{
            sortedArray.push(num2[i2]);
            i2++;
        }
    }
    
    while(i1 < l1){
        sortedArray.push(num1[i1]);
        i1++;
    }
    
    while(i2 < l2){
        sortedArray.push(num2[i2]);
        i2++;
    }
    
    return sortedArray;
    
};

var calculateMedian = function(arr, isEven,len){
    if(isEven){
        return (arr[len/2] + arr[(len/2)-1])/2;
    }
    else{
        return arr[(len-1)/2];
    }
};