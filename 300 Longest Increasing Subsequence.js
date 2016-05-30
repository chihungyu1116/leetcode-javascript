/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    var size = nums.length;
    
    if(size === 0) {
        return 0;
    }
    
    var dp = Array.from({length: size}, () => 1);
    
    for(var i = 0; i < size; i++) {
        for(var j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    return Math.max.apply(null, dp);
};