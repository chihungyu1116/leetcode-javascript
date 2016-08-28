// Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this in place with constant memory.

// For example,
// Given input array nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.

// Hide Company Tags Microsoft Bloomberg Facebook
// Hide Tags Array Two Pointers
// Hide Similar Problems (E) Remove Element


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var oc = 1;
    var sorted = 0;
    
    for(var i = 1; i < nums.length; i++) {
        if(nums[i] === nums[sorted]) {
            if(oc === 2) {
                continue;
            }
            
            oc++;
        } else {
            oc = 1;
        }
        
        sorted++;
        nums[sorted] = nums[i];
    }
    
    return sorted + 1;
};