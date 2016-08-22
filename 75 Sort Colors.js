// Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note:
// You are not suppose to use the library's sort function for this problem.

// click to show follow up.

// Hide Company Tags Pocket Gems Microsoft Facebook
// Hide Tags Array Two Pointers Sort
// Hide Similar Problems (M) Sort List (M) Wiggle Sort (M) Wiggle Sort II

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function(nums) {
//     var redIndex = 0;
//     var blueIndex = nums.length - 1;
//     var red = 0;
//     var blue = 2;

//     for(var i = 0; i <= blueIndex; i++) {
//         if(nums[i] === red) {
//             swap(nums, redIndex, i);
//             redIndex++;
//         } else if(nums[i] === blue) {
//             swap(nums, blueIndex, i);
//             blueIndex--;
//             i--;
//         }
//     }
// };

// function swap(arr, i, j) {
//     if(i === j) {
//         return;
//     }
//     var tmp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = tmp;
// }


var sortColors = function(nums) {
    var redIdx = 0;
    var blueIdx = nums.length - 1;
    var i = 0;
    
    while(i <= blueIdx) {
        if(nums[i] === 0) {
            swap(nums, i++, redIdx++);
        } else if(nums[i] === 2) {
            swap(nums, i, blueIdx--);
        } else {
            i++;
        }
    }
    
    function swap(nums, i, j) {
        var tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
};