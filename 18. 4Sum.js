/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var results = [];
    nums.sort(function(a,b) { return a - b });
    for(var i = 0; i < nums.length - 3; i++) {
        while(i > 0 && i < nums.length - 3 && nums[i] === nums[i - 1]) {
            i++;
        }
        for(var j = i + 1; j < nums.length - 2; j++) {
            while(j > i + 1 && j < nums.length - 2 && nums[j] === nums[j - 1]) {
                j++;
            }
            var low = j + 1;
            var high = nums.length - 1;
            var newTarget = target - (nums[i] + nums[j]);
            while(low < high) {
                partialSum = nums[low] + nums[high];
                if(partialSum === newTarget) {
                    results.push([nums[i], nums[j], nums[low], nums[high]]);
                    high--;
                    low++;
                    while(low < high && nums[low] === nums[low - 1]) {
                        low++;
                    }
                    while(low < high && nums[high] === nums[high + 1]) {
                        high--;
                    }
                } else if (partialSum > newTarget) {
                    high--;
                } else {
                    low++;
                }
            }
        }
    }
    return results;
};
