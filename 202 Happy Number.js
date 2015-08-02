// Leetcode #202
// Language: Javascript
// Problem: https://leetcode.com/problems/happy-number/
// Author: Chihung Yu
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n === null){
        return false;
    }
    
    var val = n;
    var hash = {};
    
    while(!hash[val]){
        if(val === 1){
            return true;
        }
        
        hash[val] = true;
        
        var sn = val + '';
        var sarr = sn.split('');    
        var total = 0;
        
        for(var i = 0; i < sarr.length; i++){
            si = parseInt(sarr[i]);
            total += Math.pow(si,2);
        }
        
        
        val = total;
    }
    
    return false;
};