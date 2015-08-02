/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var n = nums.length;
    
    for(var i = 0; i < n; i++){
        var cur = nums[i];
        if(cur === nums[i + 1]){
            var isDup = true;
            var next = i + 2;
            
            while(next < n && cur === nums[next]){
                nums.splice(next, 1);
                n--;
            }
        }
    }
    
    return n;
};