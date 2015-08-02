/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 0){
        return 0;
    }
    if(n === 1){
        return 1;
    }
    
    var uniqueways = [];
    uniqueways[0] = 1;
    uniqueways[1] = 1;
    
    for(var i = 2; i <= n; i++){
        uniqueways[i] = uniqueways[i-1] + uniqueways[i-2];
    }
    
    return uniqueways[n]
};
