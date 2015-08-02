/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var result = [];
    
    if(candidates === null || candidates.length === 0){
        return result;
    }
    
    var output = [];
    candidates.sort(function(a,b){return a > b ? 1 : -1;});
    
    console.log('c',candidates);
    generate(candidates, target, 0, result, output);
    
    return result;
};

var generate = function(c, t, index, result, output){
    if(t < 0){
        return;
    }
    if(t === 0){
        result.push(output.slice());
        console.log(output)
        return
    }
    
    for(var i = index; i<c.length; i++){
        var val = c[i];
        
        output.push(val);
        generate(c, t - val, i+1, result, output);
        output.pop();
        
        while(i < (c.length - 1) && c[i] === c[i+1]){
            i++;
        }
    }
}