/**
 * @param {string} s
 * @return {boolean}
 */



// valid cases
// 9
// .9
// 9.
// 0.9
// 9e10
// 9e-10

// invalid case
// .
// ab
// 9ea10
// 9e
// e9
// .e1



// cannot use (\d*\.?\d*)\d+

var isNumber = function(s) {
    return !!s.match(/^\s*[+-]?(\d+\.\d+|\d+\.|\.\d+|\d+)(\e[+-]?\d+)?\s*$/);
};