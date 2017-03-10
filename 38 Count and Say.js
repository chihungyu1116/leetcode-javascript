/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n === null || n.length === 0){
        return "";
    }

    var cur = "1";
    var num = 1;

    while(n > 1){
        var r = "";

        for(var i = 0; i < cur.length; i++){
            if(i < cur.length - 1 && cur[i] === cur[i+1]){
                num++;
            } else {
                r += (num + "" + cur[i]);
                num = 1;
            }
        }

        cur = r;
        n--;
    }
    return cur;
};


// var countAndSay = function(n) {
//     var str = '1';

//     for(var i = 1; i < n; i++) {
//         var newStr = '';
//         var count = 1;

//         for(var j = 1; j < str.length; j++) {
//             if(str[j] === str[j - 1]) {
//                 count++;
//             } else {
//                 newStr += count + str[j - 1];
//                 count = 1;
//             }
//         }

//         newStr += count + str[j - 1];
//         str = newStr;
//     }

//     return str;
// };


var countAndSay = function(n) {
  if(n === 1) {
    return "1";
  }
    var partial = "11";

    for(var i = 3; i <= n; i++) {
        var newStr = "";
        for(var j = 0; j < partial.length; j++) {
            var letter = partial[j];
            var count = 1;
            while(partial[j] === partial[j + 1]) {
                j++;
                count++;
            }
            newStr = newStr + count + letter;
        }
        partial = newStr;
    }
    return partial;
};
