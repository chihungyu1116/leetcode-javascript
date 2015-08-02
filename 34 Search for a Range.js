/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
var searchRange = function(nums, target) {
    var l = 0;
    var r = nums.length - 1;
    var leftBound = -1;
    var rightBound = -1;
    
    while(l <= r){
        var mid = l + parseInt((r-l)/2);
        console.log(mid, nums[mid])
        if(nums[mid] === target){
            leftBound = mid;
            r = mid - 1;
        } else if(nums[mid] > target){
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    
    l = 0;
    r = nums.length - 1;
    
    while(l <= r){
        mid = l + parseInt((r-l)/2);
        if(nums[mid] === target){
            rightBound = mid;
            l = mid + 1;
        } else if(nums[mid] > target){
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    
    return [leftBound, rightBound];
};