// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

// For example, 
// Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.


// The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!


// http://bangbingsyb.blogspot.com/2014/11/leetcode-trapping-rain-water.html

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // scan left max
    // scan right max
    // e.g. heights:  0 3 2 1 5 1
    // left max:      0 0 3 3 3 5
    // right max:     5 5 5 5 1 0
    // what that means is?
    // for index 1 -> height 3
    // 0 is its left max, 5 is its right max -> that gives zero volumn as it cannot hold water
    // for index 2 -> height 2
    // 3 is its left max and 5 is its right max -> min(3,5) = 3 and height 2 is the bottom of the water bed, so that gives (3-2) -> 1 volumn of water
    
    var leftMax = [];
    var rightMax=  [];
    var water = 0;
    
    // to get the left of i so we do i - 1
    for(var i = 1; i < height.length; i++) {
        leftMax[i] = leftMax[i] || 0;
        leftMax[i] = Math.max(leftMax[i - 1] || 0, height[i - 1]);
    }
    
    for(i = height.length - 2; i >= 0; i--) {
        rightMax[i] = rightMax[i] || 0;
        rightMax[i] = Math.max(rightMax[i + 1] || 0, height[i + 1]);
        
        var minHeight = Math.min(leftMax[i], rightMax[i]);
        var waterBottom = height[i];
        if(minHeight > waterBottom) {
            water += (minHeight - waterBottom);    
        }
    }
    
    return water;
};