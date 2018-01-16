// Leetcode 35
// Language: Javascript
// Problem: https://leetcode.com/problems/search-insert-position/
// Author: Chihung Yu
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
//     var left = 0;
//     var right = nums.length - 1;
//
//     while(left <= right){
//         var mid = parseInt((left + right)/2);
//
//         var val = nums[mid];
//
//         if(val === target){
//             return mid;
//         } else if(val > target){
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }
//
//     if(nums[left] < target){
//         return left + 1;
//     } else {
//         return left;
//     }
// };


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var left = 0;
    var right = nums.length - 1;

    while (left < right) {
        var mid = left + Math.ceil((right - left)/2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    if (nums[left] < target) {
        return left + 1;
    } else {
        return left;
    }
}
