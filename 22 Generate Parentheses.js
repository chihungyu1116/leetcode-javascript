/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var result = [];
    var output = '';
    
    generate(result, output, 0, n, 0, 0);
    return result;  
};

var generate = function(result, output, depth, n, left, right){
   if(depth === 2*n){
       result.push(output);
       return;
   }
   
   if(left < n){
       generate(result,output + '(',depth + 1, n, left + 1, right);
   }
   if(left > right){
       generate(result,output + ')',depth + 1, n, left, right+1);
   }
}

var genParAuxApproach2 = function(str, leftPar, rightPar, index, totalCharCount, sol) {
  if(index == totalCharCount) {
    if(rightPar == leftPar) {
      sol.push(str);
    }
    return;
  }
   var strLeft = insertAt(str, index, "(");
  genParAuxApproach2(strLeft, leftPar + 1, rightPar, index + 1, totalCharCount, sol);
   if(rightPar == leftPar) { return; }
  
  var strRight = insertAt(str, index, ")");
  genParAuxApproach2(strRight, leftPar, rightPar + 1, index + 1, totalCharCount, sol);
}
 var insertAt = function(str, position, value) {
  return str.slice(0, position) + value + str.slice(position);
}
