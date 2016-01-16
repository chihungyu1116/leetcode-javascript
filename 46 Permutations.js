// Leetcode 309
// Language: Javascript
// Problem: https://leetcode.com/problems/permutations/
// Author: Chihung Yu
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = [];
    var visited = [];
    
    generate(nums, 0, visited, [], result);
    
    return result;
};

var generate = function(nums, index, visited, output, result) {
    if(nums.length === output.length) {
        result.push(output.slice());
    }
    
    for(var i = 0; i < nums.length; i++) {
        if(!visited[i]) {
            visited[i] = true;
            output.push(nums[i]);
            generate(nums, index+1, visited, output, result);    
            output.pop();
            visited[i] = false;
        }
        
    }
}