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



// http://www.cs.wustl.edu/~kjg/CS101_SP97/Notes/SquareRoot/sqrt.html

var mySqrtWithPrecision = function(digit, precision) {
    // Set initial guess to 1
    var guess = 1;
    var closeEnoughPrecision = Math.pow(0.1, precision + 1);

    while(true) {
        // difference between guess and real value
        // e.g. 5's sqrt = 2.236
        // val = x*x   sqrt = val/x
        // if we guess 3 as the sqrt of 5 -> 5/3 = 1.666 the difference between 3 and 1.6666 is 1.3333 and is way off
        // as it should be x*x = 5 and x here is 2.236
        var diff = Math.abs(guess - digit/guess);

        if(diff > closeEnoughPrecision) {
            // Better guess will be (3 + 1.66666)/2 => 2.3333
            guess = (guess + digit/guess)/2;
        } else {
            break;
        }
    }

    return guess;
}