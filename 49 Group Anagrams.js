/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 


var groupAnagrams = function(strs) {
    var hash = {}
    
    for(var i = 0; i < strs.length; i++) {
        var str = strs[i];
        var sortedStr = sort(str);
        
        hash[sortedStr] = hash[sortedStr] || [];
        hash[sortedStr].push(str);
    }
    
    var result = [];
    
    for(i in hash) {
        var arr = hash[i].sort(function (a,b) {
            return a > b ? 1 : -1;
        });
        result.push(arr);
    }
    return result;
};

var sort = function(s) {
    var arr = s.split('');
    arr.sort(function (a,b) {
        return a > b ? 1 : -1;
    });
    
    return arr.join('');
}