/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var curMax = 0;
    var nJumps = 0;
    var i = 0;
    var n = nums.length;
    
    while(curMax < n - 1) {
        var lastMax = curMax;
        // go through covered area
        for(; i <= lastMax; i++) {
            curMax = Math.max(curMax, i+nums[i]);
        }
        nJumps++;
        // if cannot make progress in the covered area, give up
        if(lastMax === curMax) {
            return -1;
        }
    }
    
    return nJumps;
};