/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if(k === 0 || n === 0){
        return [];
    }
    
    var result = [];
    var output = [];
    generate(result, output, n, k, 1);
    
    return result;
};

var generate = function(result, output, n, k, cur){
    if(output.length === k){
        result.push(output.slice());
        return;
    }
    if(cur > n){
        return;
    }
    
    output.push(cur)
    generate(result, output, n, k, cur + 1);
    output.pop();
    generate(result, output, n, k, cur + 1);
}