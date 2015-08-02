/**
 * @param {number} n
 * @return {number[][]}
 */

var generateMatrix = function(n) {
    var m = [];
    for(var i = 0; i < n; i++){
        m.push([]);
    }
    
    var level = parseInt(n/2);
    var count = 1;
    
    for(var l = 0; l < level; l++){
        var x = l;
        var y = l;
        for(x = l; x < n - 1 - l; x++){
            m[y][x] = count++;
        }
        
        for(y = l; y < n - 1 - l; y++){
            m[y][x] = count++;
        }
        
        for(; x > l; x--){
            m[y][x] = count++;
        }
        
        for(; y > l; y--){
            m[y][x] = count++;
        }
    }
    
    if(n%2 === 1){
        m[level][level] = count;
    }
    
    return m;
}