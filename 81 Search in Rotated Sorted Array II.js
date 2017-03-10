// Follow up for "Search in Rotated Sorted Array":
// What if duplicates are allowed?

// Would this affect the run-time complexity? How and why?

// Write a function to determine if a given target is in the array.

// Hide Tags Array Binary Search
// Hide Similar Problems (H) Search in Rotated Sorted Array



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    var start = 0;
    var end = nums.length -1;

    while(start <= end){
        var mid = parseInt((end + start)/2);

        if(nums[mid] === target ){
            return true;
        }

        if(nums[start] === nums[mid]) {
            start++;
        } else if(nums[start] < nums[mid]){ // left part sorted
            if(target >= nums[start] && target < nums[mid]){
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else { //right part sorted
            if(target <= nums[end] && target > nums[mid]){ // normal order part
                start = mid + 1;
            } else {
                end = mid -1;
            }
        }
    }

    return false;
};

