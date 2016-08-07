// Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.


// Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].


// The largest rectangle is shown in the shaded area, which has area = 10 unit.

// For example,
// Given heights = [2,1,5,6,2,3],
// return 10.

// Hide Tags Array Stack
// Hide Similar Problems (H) Maximal Rectangle



// reference: http://www.cnblogs.com/lichen782/p/leetcode_Largest_Rectangle_in_Histogram.html

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var maxArea = 0;
    
    if(heights === null || heights.length === 0) {
        return maxArea;
    }
    
    var stack = [];
    var i = 0;
    
    while(i <= heights.length) {
        // Keep stack height in increasing order
        // stack store the height index not the height
        // everytime we encounter height smaller than the max height in the stack, we calculate area and pop 
        // height index in the stack until stack is empty or we found height smaller than the current height in the stack.
        // taking [2,1,5,6,2,3] for example
        // 2, then we encounter 1, it means anything after 1 will not yield rectangle with height greater than 1 since they all got throttle by 1
        // stack will look like
        // 1. [2]
        // 2. we calculate area 2*1, i is at index 0 and i is at 1 (1-0)*height(2) = 2
        // 3. [1]
        // 4. [1,5]
        // 5. [1,5,6]
        // we calculate area 6*1, i is at index 4 and height 6 is at index 1 (4-3)*height(6) = 6
        // 6. [1,5]
        // we calculate area 5*2, i is at index 4 and height 5 is at index 2 (4-2)*height(5) = 10
        // 7. [1,2]
        // 8. [1,2,3]
        // etc...

        if(stack.length === 0 || heights[stack[stack.length - 1]] <= heights[i]) {
            stack.push(i++);
        } else {
            var height = heights[stack.pop()];
            var width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(height*width, maxArea);
        }
    }
 
    return maxArea;
};