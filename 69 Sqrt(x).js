/**
Implement int sqrt(int x).

Compute and return the square root of x.
*/
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var start = 1,
        end = x,
        mid;
    
    if (x === 0) {
        return 0;
    }
    
    while (start + 1 < end) {
        mid = start + parseInt((end - start) / 2);
        
        if (mid * mid <= x) {
            start = mid;
        } else {
            end = mid;
        }
    }
    
    return start;
};
