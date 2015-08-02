/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 === null || num2 === null || num1.length === 0 || num2.length === 0){
        return 0;
    }
    
    var arr1 = num1.split('').reverse();
    var arr2 = num2.split('').reverse();
    
    var result = [];
    
    for(var i = 0; i < arr1.length; i++){
        var carry = 0;
        
        for(var j = 0; j < arr2.length; j++){
            var n1 = parseInt(arr1[i]);
            var n2 = parseInt(arr2[j]);
            var exist = parseInt(result[i+j] || 0);
            var total = n1*n2+carry+exist;
            
            var remain = total%10 + '';
            carry = parseInt(total/10);
            result[i+j] = remain;
        }
        
        if(carry > 0){
            result[i + j] = carry + '';
        }
    }
    
    result = result.reverse();
    result = result.join('');
    result = result.replace(/^0+/g,'');
    
    if(result.length === 0){
        return "0";
    } else {
        return result;
    }
};