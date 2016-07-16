// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Note: Do not use any built-in library function such as sqrt.

// Example 1:

// Input: 16
// Returns: True
// Example 2:

// Input: 14
// Returns: False
// Credits:
// Special thanks to @elmirap for adding this problem and creating all test cases.

// Hide Company Tags LinkedIn
// Show Tags
// Show Similar Problems


/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    var left = 0;
    var right = num;
    
    while(left <= right) {
        var mid = left + parseInt((right - left)/2);
        var pow = mid*mid;
        if(pow === num) {
            return true;
        } else if(pow < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;  
};