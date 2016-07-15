// Given a collection of numbers that might contain duplicates, return all possible unique permutations.

// For example,
// [1,1,2] have the following unique permutations:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]
// Hide Company Tags LinkedIn Microsoft
// Show Tags
// Hide Similar Problems (M) Next Permutation (M) Permutations (M) Palindrome Permutation II


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a,b)=> a > b ? 1 : -1);
    
    var result = [];
    var visited = Array(nums.length).fill(false);
    generatePermute(nums, 0, [], visited, result);
    
    return result;
};


var generatePermute = function(nums, step, currentResult, visited, finalResult) {
    // Since we might have duplicate and skipped some nums, so the currentResult.length might not equal to nums.length even when we are already done traversing
    // if(nums.length === currentResult.length) {
    if(step === nums.length) {
        finalResult.push(currentResult.slice());
        return;
    }
    
    for(var i = 0; i < nums.length; i++) {
        if(!visited[i]) {
            // !!! important: nums[i] === nums[i-1] && !visited[i-1]
            if(i > 0 && nums[i] === nums[i-1] && !visited[i-1]) {
                continue;
            }
                
            visited[i] = true;
            var num = nums[i];
            currentResult.push(num);
            generatePermute(nums, step + 1, currentResult, visited, finalResult);
            currentResult.pop();
            visited[i] = false;
        }
    }
}