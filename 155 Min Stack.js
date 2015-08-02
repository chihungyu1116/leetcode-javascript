// Leetcode #155
// Language: Javascript
// Problem: https://leetcode.com/problems/min-stack/
// Author: Chihung Yu
/**
 * @constructor
 */
var MinStack = function() {
    this.min = [];
    this.stack = [];
}




/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
    var min = this.getMin();
    
    this.stack.push(x);
    
    if(min === undefined || min >= x){
        this.min.push(x);
    }
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
    var val = this.stack.pop();
    var min = this.getMin();
    
    if(val === min){
        this.min.pop();
    }
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1];
};