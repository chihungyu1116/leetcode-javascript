// http://blog.csdn.net/lisonglisonglisong/article/details/45666975

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    var sum = 0;
    var left = 0;
    var right = -1;
    var len = nums.length;
    var minLen = Infinity;
    
    while(right < len) {
        while(right < len && sum < s) {
            sum += nums[++right];
        }
        if(sum >= s) {
            minLen = Math.min(right - left + 1, minLen);
            sum -= nums[left];
            left++;
        }
        
    }
    
    
    
    return minLen > len ? 0 : minLen;
};