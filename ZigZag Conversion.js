// Ref: http://www.cnblogs.com/springfor/p/3889414.html
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string text, int nRows);
// convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if(s === null || s.length === 0 || numRows <= 0) {
    return "";
  }
  
  if(numRows === 1) {
    return s;
  }
  
  var res = '';
  var size = 2 * numRows - 2;
  
  for(var i = 0; i < numRows; i++) {
    for(var j = i; j < s.length; j += size) {
      res += s[j];
      
      if(i !== 0 && i !== numRows - 1) { // except first and last row
        var tmp = j + size - 2 * i;
        if(tmp < s.length) {
          res += s[tmp];
        }
      }
    }
  }
  
  return res;
};