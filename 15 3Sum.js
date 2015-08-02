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
        
        if(i === 0 || nums[i] > nums[i-1]){ // very important, same as line 40, remove duplicate as 111 will only run once 1-> rather tan 1 1 1
            target = 0 - nums[i];
            
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