/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//  http://fisherlei.blogspot.com/2012/12/leetcode-next-permutation.html
var nextPermutation = function(nums) {
    var vioIndex = nums.length - 1;
    
    while(vioIndex > 0) {
        if(nums[vioIndex - 1] < nums[vioIndex]) {
            break;
        }
        vioIndex--;
    }
    
    if(vioIndex > 0) {
        vioIndex--;
        var first = nums.length - 1;
        while(first > vioIndex && nums[first] <= nums[vioIndex]){
            first--;
        }
        
        var temp = nums[vioIndex];
        nums[vioIndex] = nums[first];
        nums[first] = temp;
        
        vioIndex++;
    }
    
    var end = nums.length - 1;
    
    while(end > vioIndex) {
        temp = nums[end];
        nums[end] = nums[vioIndex];
        nums[vioIndex] = temp;
        
        end--;
        vioIndex++;
    }
};