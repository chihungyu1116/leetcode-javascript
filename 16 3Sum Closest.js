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

//Shorter solution
var threeSumClosest = function(nums, target) {
    var closest = Number.Infinity;
    var gap = -1;

    nums.sort(function(a, b) { return a - b });
    for(var i = 0; i < nums.length - 2; i++) {
        var low = i + 1;
        var high = nums.length - 1;

        while(low < high) {
            var sum = nums[i] + nums[low] + nums[high];
            partialGap = Math.abs(target - sum);
            if(partialGap < gap || gap === -1) {
                gap = partialGap;
                closest = sum;
            }

            if(sum === target) {
                return target;
            } else if (sum < target) {
                low++;
            } else {
                high--;
            }
        }
    }
    return closest;
};
