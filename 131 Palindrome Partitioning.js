/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    var result = [];
    
    generate(s, 0, [], result);
    
    return result;
};

var generate = function(s, index, output, result) {
    if(index === s.length){
        result.push(output.slice());
        return;
    }
    
    
    for(var i = index; i < s.length; i++) {
        var str = s.substring(index, i);
        
        if(isPalindrome(s, index, i)){
            output.push(s.substring(index, i + 1));
            generate(s, i + 1, output, result);
            output.pop();
        }
    }
}

var isPalindrome = function(s, head, tail) {
    while(head < tail) {
        if(s[head] !== s[tail]) {
            return false;
        }
        
        head++;
        tail--;
    }
    
    return true;
}