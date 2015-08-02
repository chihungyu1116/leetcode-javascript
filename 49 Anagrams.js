/**
 * @param {string[]} strs
 * @return {string[]}
 */
var anagrams = function(strs) {
    var result = [];
    var hash = {};
    var keyList = {};
    
    for(var i = 0; i < strs.length; i++){
        var str = strs[i];
        var key = getKey(str);
        
        if(hash[key]){
            keyList[key] = true;
        } else {
            hash[key] = [];
        }
        
        hash[key].push(str);
    }
    
    for(i in keyList){
        result = result.concat(hash[i]);
    }
    
    return result;
};

var getKey = function(str){
    var key = ""
    var arr = [];
    for(var i = 0; i < str.length; i++){
        var val = str.charCodeAt(i) - 'a'.charCodeAt(0);
        arr[val] = arr[val] || 0;
        arr[val]++;
    }
    
    return arr.join('_');
}