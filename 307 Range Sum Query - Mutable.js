// http://bookshadow.com/weblog/2015/08/13/segment-tree-set-1-sum-of-given-range/

//303. Range Sum Query - Immutable

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = [];
    this.nums[0] = 0;
    for(var i = 0; i < nums.length; i++) {
        this.nums[i + 1] = this.nums[i] + nums[i];
    }
    // console.log(this.nums);
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return (this.nums[j + 1] - this.nums[i]);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */
