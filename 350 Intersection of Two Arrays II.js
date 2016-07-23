// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

// Note:
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:
// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
// Hide Tags Binary Search Hash Table Two Pointers Sort
// Hide Similar Problems (E) Intersection of Two Arrays



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var hash = {};
    var arr1, arr2;

    if(nums1.length > nums2.length) {
        arr1 = nums2;
        arr2 = nums1;
    } else {
        arr1 = nums1;
        arr2 = nums2;
    }

    var count = arr1.length;
    var result = [];
    
    for(var i = 0; i < arr1.length; i++) {
        hash[arr1[i]] = hash[arr1[i]] || 0;
        hash[arr1[i]]++;
    }
    
    for(i = 0; i < arr2.length && count !== 0; i++) {
        if(hash[arr2[i]] > 0) {
            hash[arr2[i]]--;
            count--;
            result.push(arr2[i]);
        }
    }
    
    return result;
};