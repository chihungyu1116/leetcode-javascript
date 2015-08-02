/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if(nums === null || nums.length < 2){
        return null;
    }
    
    if(nums.length === 3){
        return nums.reduce(function(prev,cur){return prev + cur;});
    }

    var result = 0;
    var closest = Infinity;

    nums.sort(function(a,b){return a > b ? 1 : -1;});
    
    for(var i = 0; i < nums.length; i++){
        var j = i + 1;
        var k = nums.length - 1;
        while(j < k){
            var sum = nums[j] + nums[k] + nums[i];
            var diff = sum - target;
            
            if(diff === 0){
                return sum;
            }
            
            if(sum < target){
                diff = target - sum;
                j++;
            } else {
                diff = sum - target;
                k--
            }
            
            if(diff < closest){
                closest = diff;
                result = sum;
            }
        }
        
        while(i < (nums.length-1) && nums[i] === nums[i+1]) i++;
    }
    
    return result;
};