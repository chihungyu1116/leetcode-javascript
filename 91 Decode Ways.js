/**
 * @param {string} s
 * @return {number}
 */

var numDecodings = function(s) {
    if(s === null || s.length === 0){
        return 0;
    }
    
    if(s[0] === '0'){
        return 0;
    }
    
    var nums = [];
    nums[0] = 1;
    nums[1] = 1;
    
    for(var i = 2; i <= s.length; i++){
        var tmp = parseInt(s.substring(i-1, i));
        
        if(tmp !== 0){
            nums[i] = nums[i-1];
        } else {
            nums[i] = 0;
        }
        
        if(s[i - 2] !== '0'){
            tmp = parseInt(s.substring(i-2, i));
            
            if(tmp > 0 && tmp < 27){
                nums[i] += nums[i-2];
            }
        } else {
            nums[i] = nums[i] || 0;
        }
    }
    
    return nums[s.length];
};