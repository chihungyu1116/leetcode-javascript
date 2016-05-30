/**
 * @param {number[]} x
 * @return {boolean}
 */
 
//  http://www.cnblogs.com/grandyang/p/5216856.html
var isSelfCrossing = function(x) {
    
    for(var i = 3; i < x.length; i++) {
        if (x[i] >= x[i - 2] && x[i - 3] >= x[i - 1]) {
            return true;
        }
        if(i >= 4 && x[i-1] == x[i-3] && x[i] >= (x[i-2] - x[i-4])) {
            return true;
        }
        if(i >= 5 && x[i-2] >= x[i-4] && x[i-3] >= x[i-1] && x[i-1] >= (x[i-3] - x[i-5]) && x[i] >= (x[i-2] - x[i-4])) {
            return true;
        }
    }
    
    return false;
};