/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var arr = path.split('/');
    var stack = [];
    
    for(var i = 0; i < arr.length; i++){
        var c = arr[i];
        
        if(c === '..'){
            stack.pop();
        } else if(c !== '' && c !== '.' && c !== '/'){
            stack.push(c);
        }
    }
    
    var result = stack.join('/');
    return '/' + result;
};