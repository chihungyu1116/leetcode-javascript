// Leetcode #162
// Language: Javascript
// Problem: https://leetcode.com/problems/find-peak-element/
// Author: Chihung Yu
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums === null || nums.length === 0){
        return 0;
    }
    
    var n = nums.length;
    var start = 0;
    var end = n - 1;
    var mid = 0;
    
    while(start <= end){
        mid = start + parseInt((end - start)/2);
        if((mid === 0 || nums[mid] > nums[mid-1]) && (mid === n - 1 || nums[mid] >= nums[mid+1])){
            return mid;
        } else if(mid > 0 && nums[mid-1] > nums[mid]){
            end = mid-1;
        } else{
            start = mid+1;
        }
    }
    
    return mid;
};