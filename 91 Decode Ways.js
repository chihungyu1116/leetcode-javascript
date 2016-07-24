// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given an encoded message containing digits, determine the total number of ways to decode it.

// For example,
// Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).

// The number of ways decoding "12" is 2.

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



// Using recusion
// It also store all the possible combination
var numDecodings = function(s) {
    var result = [];
    
    function traverse(s, beg, end, cur) {
        if(end > s.length) {
          return 
        }
    
        var str = s.substring(beg, end);
        var num = parseInt(str);
        
        if(isNaN(num) || num === 0 || num > 26) {
          return;
        }
      
        cur.push(str);
      
        if(end === s.length){
          result.push(cur.slice());
          return;
        }
      
        traverse(s, end, end + 1, cur);
        traverse(s, end, end + 2, cur);
        cur.pop();
    }
  
    traverse(s, 0, 1, []);
    traverse(s, 0, 2, []);
  
    return result.length;
};