/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function(nums) {
    var redIndex = 0;
    var blueIndex = nums.length - 1;
    var i = 0
    
    while(i <= blueIndex){
        if(nums[i] === 0){
            swap(nums, i, redIndex);
            i++; // [!!!] if swap with latter colors do not i++
            redIndex++;
        } else if(nums[i] === 2){
            swap(nums, i, blueIndex);
            blueIndex--;
        } else {
            i++;    
        }
    }
};

var swap = function(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}