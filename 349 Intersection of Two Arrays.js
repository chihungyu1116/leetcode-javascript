// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

// Note:
// Each element in the result must be unique.
// The result can be in any order.
// Hide Tags Binary Search Hash Table Two Pointers Sort
// Hide Similar Problems (E) Intersection of Two Arrays II


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var hash = {};
    var result = [];
    var i = 0;
    while(i < nums1.length || i < nums2.length) {
        if(i < nums1.length) {
            hash[nums1[i]] = hash[nums1[i]] || [];
            hash[nums1[i]][0] = true;
        }
        
        if(i < nums2.length) {
            hash[nums2[i]] = hash[nums2[i]] || [];
            hash[nums2[i]][1] = true;
        }

        i++
    }
    
    for(i in hash) {
        if(hash[i][0] && hash[i][1]) {
            result.push(parseInt(i));
        }
    }
    
    return result;
};