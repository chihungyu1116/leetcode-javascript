/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    var start = 0;
    var end = nums.length -1;
    
    while(start <= end){
        var mid = start + parseInt((end - start)/2);
        
        if(nums[mid] === target){
            return true;
        }
        
        if(nums[start] < nums[mid]){
            if(target >= nums[start] && target < nums[mid]){ // normal order part
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else if(nums[mid] < nums[start]) {
            if(target <= nums[end] && target > nums[mid]){ // normal order part            
                start = mid + 1;
            } else {
                end = mid -1;
            }
        } else {
            start++;
        }
    }
    
    return false;
};