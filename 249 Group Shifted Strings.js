// Given a string, we can "shift" each of its letter to its successive letter, for example: "abc" -> "bcd". We can keep "shifting" which forms the sequence:

// "abc" -> "bcd" -> ... -> "xyz"
// Given a list of strings which contains only lowercase alphabets, group all strings that belong to the same shifting sequence.

// For example, given: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"], 
// A solution is:

// [
//   ["abc","bcd","xyz"],
//   ["az","ba"],
//   ["acef"],
//   ["a","z"]
// ]
// reference: http://blog.csdn.net/pointbreak1/article/details/48780345

/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    var result = [];
    var map = new Map();
    
    for(var i = 0; i < strings.length; i++) {
        var shift = '';
        var string = strings[i]
        for(var j = 0; j < string.length; j++) {
            shift += (string.charCodeAt(j) - string.charCodeAt(0) + 26)%26;
            shift += ' ';
        }
        if(map.has(shift)) {
            map.get(shift).push(string);
        } else {
            map.set(shift, [string]);
        }
    }

    map.forEach((value, key)=> {
        result.push(value);
    });
    
    
    return result;
};