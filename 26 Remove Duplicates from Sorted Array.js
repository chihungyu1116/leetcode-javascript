// Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this in place with constant memory.

// For example,
// Given input array nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(!nums || nums.length === 0) {
        return 0;
    }
  
    var end = 0;
    
    // index: 012345678
    // vals:  111222333
    // first swap happen when end = 0; i points at index 3 with val 2
    // end++ becomes end points at index 1 and swap with index 3
    // after that vals become:
    // vals:  121122333
    // i at at index 4 and end is at index 2
    
    for(var i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[end]) {
            end++;
            
            if(i !== end) {
                nums[end] = nums[i];
            }
        }
    }
    
    return end+1;
};



// second attempt

var removeDuplicates = function(nums) {
    var sorted = 0;
    
    for(var i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[sorted]) {
            sorted++;
            nums[sorted] = nums[i];
        }
    }
    
    return sorted + 1;
};


// [tricky]

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var hash = {};
    var cur = 0;
    
    for(var i = 0; i < nums.length; i++) {
        var num = nums[i];
        
        if (hash[num] === undefined) {
            hash[num] = true;
            nums[cur] = num;
            cur++;
        }
    }
    
    return cur;
};