// Leetcode #152
// Language: Javascript
// Problem: https://leetcode.com/problems/maximum-product-subarray/
// Author: Chihung Yu
/**
 * @param {number[]} nums
 * @return {number}
 */
//  http://www.programcreek.com/2014/03/leetcode-maximum-product-subarray-java/
var maxProduct = function(nums) {
  if(nums === null || nums.length === 0){
      return 0;
  }
   
  var max = nums[0];
  var min = max;
  var ans = max;
   
  for(var i = 1; i < nums.length; i++){
      var tmax = nums[i]*max;
      var tmin = nums[i]*min;
      
      max = Math.max(Math.max(tmax, nums[i]), tmin);
      min = Math.min(Math.min(tmax, nums[i]), tmin);
      ans = Math.max(ans,max);
  }
   
  return ans
};