/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var result = 0;
    
    for(var i = 0; i < s.length; i++){
        if(i > 0 && (c2n(s[i]) > c2n(s[i-1]))){
            result -= 2*c2n(s[i-1]); // because previously added [!!!]
        }
        
        result += c2n(s[i]);
    }
    
    return result;
};

var c2n = function(c){
    switch(c){
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return 0;
    }
}

