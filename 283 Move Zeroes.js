// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.
// Credits:
// Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

// Hide Company Tags Bloomberg Facebook
// Hide Tags Array Two Pointers
// Hide Similar Problems (E) Remove Element



/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//     var x = 0;
//     var i = 0;
//     while(i < nums.length) {
//         if(nums[i] !== 0 && nums[x] === 0) {
//           nums[x++] = nums[i];
//           nums[i++] = 0;
//         }

//         while(nums[x] !== 0 && x < nums.length) {
//             x++;
//         }
      
//         if(i <= x) {
//           i = x + 1;
//         }
              
//         while(nums[i] === 0) {
//           i++;
//         }
//     }
// };




// // Simpler but slower algo
var moveZeroes = function(nums) {
    y = 0; // y is none zero pointer

    // y only increase when i found a none zero number
    // i only swap if i found a none zero number
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            var tmp = nums[i];
            nums[i] = nums[y];
            nums[y] = tmp;
            y++;
        }
    }

    return nums;
};
console.log(moveZeroes([0,1,0,3,12]));