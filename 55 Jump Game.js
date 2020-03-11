/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var numLeft = nums[0]; 
    for(var i = 1; i < nums.length; i++){
        numLeft--;
        if(numLeft < 0){
            return false;
        }
        numLeft = Math.max(nums[i], numLeft);
    }
    return true;
};