/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    var missing = [];
    if (nums.length === 0) {
        missing.push(getRange(lower,upper));
        return missing;
    }
    
    // Only need to search range between lower and upper
    var next = lower;
    for(var i = 0; i < nums.length; i++) {
        var val = nums[i];
        
        if (val < next) {
            continue;
        } else if (val === next) {
            next++;
            continue;
        }
        // val > next
        missing.push(getRange(next, val-1));
        next = val + 1;
    }
    
    if (next <= upper) {
        missing.push(getRange(next, upper));
    }
    
    return missing;
};

function getRange(lower, upper) {
    return upper === lower ? `${lower}` : `${lower}->${upper}`;
}