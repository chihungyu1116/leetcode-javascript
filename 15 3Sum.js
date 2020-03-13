// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note: The solution set must not contain duplicate triplets.

// For example, given array S = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
// Hide Company Tags Amazon Microsoft Bloomberg Facebook Adobe
// Hide Tags Array Two Pointers
// Hide Similar Problems (E) Two Sum (M) 3Sum Closest (M) 4Sum (M) 3Sum Smaller



/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    var result = [];
    
    if(nums.length < 3){
        return result;
    }
    
    nums.sort(function(a,b){return a>b ? 1 : -1;});
    
    var len = nums.length;
    
    for(var i = 0; i < len-2; i++){
        
        if(i === 0 || nums[i] > nums[i-1]){ // very important, same as line 40, remove duplicate as 111 will only run once 1-> rather than 1 1 1
            var target = 0 - nums[i];
            
            j = i + 1;
            k = len - 1;
            
            while(j < k){
                if(nums[j] + nums[k] === target){
                    result.push([nums[i],nums[j],nums[k]]);
                    j++;
                    k--;
                    while(j < k && nums[j] === nums[j-1]){j++;}
                    while(j < k && nums[k] === nums[k+1]){k--;}
                } else if(nums[j] + nums[k] < target){
                    j++;
                } else {
                    k--;
                }
            }
        }
        // very important, same as line 19
        // if(i < len - 1){ 
        //     while(nums[i] === nums[i+1]){i++;}
        // }
    }
    
    return result;
};