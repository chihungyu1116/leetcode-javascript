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

//Another Solution, similar approach that Permutation.js
var permuteUnique = function(nums) {
    return permut(nums.sort(), []);
};

var permut = function(nums, partial) {
    if(nums.length === 0) {
        return [partial];
    }
    var listSol = [];
    for(var i = 0; i < nums.length; i++) {
        var endRepeated = i;
        while(endRepeated < nums.length && nums[i] === nums[endRepeated]) {
            endRepeated++;
        }
        
        var arrayWithoutI = nums.slice(0,i).concat(nums.slice(i + 1, nums.length));
        var partialSol = partial.concat([nums[i]]);
        var sol = permut(arrayWithoutI, partialSol);
        if(sol.length > 0){
            listSol = listSol.concat(sol);
        }
        i = endRepeated - 1;
    }
    return listSol;
};

