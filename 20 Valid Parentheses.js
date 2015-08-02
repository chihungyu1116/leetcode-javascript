/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    var index = 0;
    while(index < s.length){
        var c = s[index];
        
        if(c === "(" || c === "[" || c === "{"){
            stack.push(c);
        } else {
            var oldC = stack.pop();
            
            if(oldC === '(' && c !== ')'){
                return false;
            } else if(oldC === '[' && c !== ']'){
                return false;
            } else if(oldC === '{' && c !== '}'){
                return false;
            } else if(oldC === undefined) {
                return false;
            }
        }
        
        index++;
    }
    
    return stack.length === 0;
};