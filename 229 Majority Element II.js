// Leetcode #229
// Language: Javascript
// Problem: https://leetcode.com/problems/majority-element-ii/
// Author: Chihung Yu
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    var n1 = null;
    var n2 = null;
    
    var c1 = 0;
    var c2 = 0;
    
    for(var i = 0; i < nums.length; i++){
        var n = nums[i];
        
        if(n === n1){
            c1++;
        } else if(n === n2){
            c2++;
        } else if(c1 === 0){
            c1 = 1;
            n1 = n;
        } else if(c2 === 0){
            c2 = 1;
            n2 = n;
        } else {
            c1--;
            c2--;
        }
    }
    
    c1 = 0;
    c2 = 0;
    
    for(i = 0; i < nums.length; i++){
        n = nums[i];
        
        if(n1 === n){
            c1++;
        }
        if(n2 === n){
            c2++;
        }
    }
    
    var results = [];
    var c3 = Math.floor(nums.length/3);
    
    if(c1 > c3){
        results.push(n1);
    }
    if(c2 > c3){
        results.push(n2);
    }
    
    return results;
};