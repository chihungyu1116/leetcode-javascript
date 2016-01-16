// Leetcode 12
// Language: Javascript
// Problem: https://leetcode.com/problems/integer-to-roman/
// Author: Chihung Yu
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var dict = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    var val = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var result = "";
    
    for(var i = 0; i < val.length; i++) {
        var v = val[i];
        
        if(num >= v) {
            var count = parseInt(num/v);
            num %= v;
            
            for(var j = 0; j < count; j++) {
                result = result + dict[i];
            }
        }
    }
    
    return result;
};