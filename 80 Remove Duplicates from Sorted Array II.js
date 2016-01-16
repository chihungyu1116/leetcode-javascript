/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var n = nums.length;
    var index = 0;
    var oc = 1;
    
    for(var i = 1; i < nums.length; i++) {
        if(nums[index] === nums[i]) {
            if(oc === 2) {
                continue;
            }
            oc++;
        } else {
            oc = 1;
        }
        
        index++;
        nums[index] = nums[i];
    }
    
    return index + 1;
};