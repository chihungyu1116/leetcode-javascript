// Given an absolute path for a file (Unix-style), simplify it.

// For example,
// path = "/home/", => "/home"
// path = "/a/./b/../../c/", => "/c"

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var arr = path.split('/');
    var result = [];
    
    for(var i = 0; i < arr.length; i++) {
        var p = arr[i];
        if(p === '..') {
            result.pop();
        } else if(p !== '' && p !== '.') {
            result.push(p);
        }
    }
    
    return '/' + result.join('/');
};