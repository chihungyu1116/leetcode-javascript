/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash = {};
    
    for(var i = 0; i < nums.length; i++){
        hash[nums[i]] = i;
    }
    
    for(i = 0; i < nums.length; i++){
        var num = nums[i];
        var diff = target - num;
        if(hash[diff] !== undefined && hash[diff] !== i){
            if(hash[diff] > i){
                return [i+1, hash[diff]+1];
            } else {
                return [hash[diff]+1, i+1]
            }
        }
    }
    
    return [];
};