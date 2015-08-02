/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var result = [];
    
    if(candidates === null || candidates.length === 0){
        return result;
    }
    
    candidates.sort(function(a,b){return a > b ? 1 : -1});
    
    var output = [];
    
    generate(candidates, result, output, target, 0);
    
    return result;
};

var generate = function(candidates, result, output, sum, index){
    if(sum === 0){
        result.push(output.slice());    
    }
    if(sum < 0){
        return;
    }
    
    for(var i = index; i < candidates.length; i++){
        if(i > index && candidates[i] === candidates[i - 1]){
            continue;
        }
        
        if(candidates[i] <= sum){
            output.push(candidates[i]);
            generate(candidates, result, output, sum - candidates[i], i);
            output.pop();
        }
    }
}