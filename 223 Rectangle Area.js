// Leetcode #223
// Language: Javascript
// Problem: https://leetcode.com/problems/rectangle-area/
// Author: Chihung Yu
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var area = (C-A)*(D-B) + (G-E)*(H-F);
    
    if((A > G || C < E) || (D < F || B > H)) {
        return area;
    }
    
    var left = Math.max(A,E);
    var top = Math.min(D,H);
    var right = Math.min(C,G);
    var bottom = Math.max(B,F);
    
    return area - (right - left)*(top - bottom);
};