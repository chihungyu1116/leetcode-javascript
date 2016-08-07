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
    var n = nums.length;
    var index = 0;
    var oc = 1;
    
    for(var i = 1; i < nums.length; i++) {
        if(nums[index] === nums[i]) {
            if(oc === 2) {
                continue;
            }
            oc++;
        } else {
            oc = 1;
        }
        
        index++;
        nums[index] = nums[i];
    }
    
    return index + 1;
};



161700

70000 rsu => $538,000   4yrs 1 yr cliff 25% every quarter

benefit

