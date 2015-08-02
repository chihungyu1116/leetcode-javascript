// Leetcode #165
// Language: Javascript
// Problem: https://leetcode.com/problems/compare-version-numbers/
// Author: Chihung Yu
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 
var comparator = function(v1,v2){
    
}
 
var compareVersion = function(version1, version2) {
    var arr1 = version1.split('.');
    var arr2 = version2.split('.');
    
    var index = 0;
    var len = Math.max(arr1.length, arr2.length);
    
    while(index < len){
        var v1 = parseInt(arr1[index]);
        var v2 = parseInt(arr2[index]);
        
        if(isNaN(v1) && v2 !== 0){
            return -1;
        }
        
        if(isNaN(v2) && v1 !== 0){
            return 1;
        }
        
        if(v1 > v2){
            return 1;
        } else if(v1 < v2){
            return -1;
        }
        
        index++;
    }
    
    return 0;
};