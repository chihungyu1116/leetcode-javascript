// Given an input string, reverse the string word by word. A word is defined as a sequence of non-space characters.

// The input string does not contain leading or trailing spaces and the words are always separated by a single space.

// For example,
// Given s = "the sky is blue",
// return "blue is sky the".

// Could you do it in-place without allocating extra space?

/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify the string in-place instead.
 */
var reverseWords = function(str) {
    var arr = str;
    
    reverse(arr, 0, arr.length - 1);
    var last = 0;
  
    for(var i = 0; i <= arr.length; i++) {
        if(arr[i] === ' ' || i === arr.length) {
            reverse(arr, last, i - 1);
            last = i + 1;
        }
    }
    
    function reverse(arr, beg, end) {
        while(beg < end) {
            var tmp = str[beg];
            str[beg] = str[end];
            str[end] = tmp;
            beg++;
            end--;
        }    
    }  
};