// Leetcode 120
// Language: Javascript
// Problem: https://leetcode.com/problems/triangle/
// Author: Chihung Yu
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var curLvlIndex = 0;
    var cur = triangle[curLvlIndex];
    var next;
    
    while(curLvlIndex < (triangle.length-1)){
        next = triangle[curLvlIndex + 1];
        
        for(var i = 0; i < next.length; i++){
            var a,b;
            if(i === 0){
                b = Infinity;
            } else {
                b = cur[i-1];
            }
            
            if(i < cur.length){
                a = cur[i];
            } else {
                a = Infinity;
            }
            
            next[i] += Math.min(a,b);
        }
        cur = next;
        curLvlIndex++;
    }
    
    return Math.min.apply(null, cur);
};