// Given a string, parse it and return a string array.
// It's like a tokenizer, but the rules are too...
// For exmple, string="abc(edf)hij{klmn}opq[rst]uvw"
// Rule 1:
// The delimitors are (), {}, []. They are in pair.
// So output array: ["abc", "edf", "hij", "klmn", "opq", "rst", "uvw"]
// Rule 2:
// if any two consecutive "(" means escaping, that is "((" is actually output char "(".
// It's not part of the delimitor. Similar to ")", "{", "}", "[", "]". abc(e))df) =&gt; ["abc", "e)df"], since the "))" outpus ")".
// Rule 3: if "{" is inside a delimitor pair (), then "{" isn't part of the delimitor. Output it as is. abc(e{df}}g) =&gt; ["abc", "e{df}}g"]
// So, parse the given string and assume the given string is always valid and parsable.



function tokenizeString(str) {
  var result = [];
  var cur = '';
  var i = 0;

  while(i < str.length){
    var c = str[i];

    // Need to take care of [ && [[ && [[[
    // [123] -> ['123'], [[123]] --> ['[123]'], [[[123]]] -> ['[[123]]']
    if(c === '[' || c === '(' || c === '{') {
      if(cur !== '') {
        result.push(cur);
        cur = '';
      }
      var eq = escapeQuote(str, i + 1, c);
      result.push(eq[0]);
      i = eq[1];
      
    } else {
      cur += c;
      i++;
    }
  }

  if(cur !== '') {
    result.push(cur);
  }

  return result;

  function escapeQuote(str, i, quoteSym) {
    var quoteCnt = 1;
    var result = '';

    while(i < str.length) {
      var c = str[i]
      if(quoteSym === c) {
        quoteCnt++;
      } else if((quoteSym === '[' && c === ']') 
        || (quoteSym === '{' && c === '}')
        || (quoteSym === '(' && c === ')')
        ) {
        quoteCnt--;
      }

      i++;
      
      if(quoteCnt === 0) {
        break;
      }
      
      result += c;
    }

    return [result, i];
  }
}


var str = "abc(((edf)))hij{{klmn}}opq[rst]uvw";
// answer should be ['abc', '((edf))', 'hij', '{klmn}', 'opq', 'rst', 'uvw']

console.log(tokenizeString(str));
// [ 'abc', '((edf))', 'hij', '{klmn}', 'opq', 'rst', 'uvw' ] 
