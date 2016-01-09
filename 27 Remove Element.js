// Leetcode 27
// Language: Javascript
// Problem: https://leetcode.com/problems/remove-element/
// Author: Chihung Yu
/**
 * @param {number[]} A
 * @param {number} elem
 * @returns {number}
 */
var removeElement = function(A, elem) {
    var i = 0;
    var j = A.length-1;
    
    while(i <= j){
        if(A[i] === elem){
            var temp = A[i];
            A[i] = A[j];
            A[j] = temp;
            j--;
        } else {
            i++;
        }
    }
    
    return i;
};