/**
 * @param {string} s
 * @return {string[]}
 */
 
var restoreIpAddresses = function(s) {
    var result = [];
    var ipNums = [];
    findIp(s, 0, result, ipNums);
    return result;
};

var findIp = function(s, index, result, ipNums){
    if(ipNums.length === 4){
        if(index === s.length){
            var ip = ipNums.join('.');
            result.push(ip);
        }
        
        return
    }
    
    for(var i = index; i < (index+3) && i < s.length; i++){
        var str = s.substring(index, i + 1);
        
        if(isValidNum(str)){
            ipNums.push(str);
            findIp(s, i + 1, result, ipNums);
            ipNums.pop();
        }
    }
}

var isValidNum = function(s){
    if(s.length === 0 || s.length > 3){
        return false;
    }
    
    if(s[0] === '0' && s.length !== 1){
        return false;
    }
    
    if(s.length === 3 && parseInt(s) > 255){
        return false;
    }
    
    return true;
}