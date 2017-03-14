/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    if(nums === null || nums.length <= 2) {
        return nums;
    }

    var xor = nums[0];
    for(var i = 1; i < nums.length; i++) {
        xor ^= nums[i];
    }

    var exp = 1;
    while(!(exp & xor)) {
        exp = exp * 2;
    }
    console.log(exp);
    var xorBit0 = 0;
    var xorBit1 = 0;

    for(var j = 0; j < nums.length; j++) {
        if(exp & nums[j]){
            xorBit1 ^= nums[j];
            console.log("with 1:  " + nums[j]);
        } else {
            console.log("with 0:  " + nums[j]);
            xorBit0 ^= nums[j];
        }
    }

    return [xorBit0, xorBit1];
};
