// http://fisherlei.blogspot.com/2013/11/leetcode-wordbreak-ii-solution.html
/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    var result = [];
    var solutions = [];
    var len = s.length;
    var possible = [];
    
    for(var i = 0; i <= s.length; i++) {
        possible.push(true);
    }
    
    getAllSolutions(0, s, wordDict, result, solutions, possible);
    return solutions;
};

function getAllSolutions(start, s, wordDict, result, solutions, possible) {
    if(start === s.length) {
        solutions.push(result.join(' ')) // remove the last space
        return;
    }
    
    // loop through string from i to s.length
    for(var i = start; i < s.length; i++) {
        var piece = s.substring(start, i+1);
        
        // possible is to mark step whether i+1 to s.length have any possible words
        if(wordDict.has(piece) && possible[i+1]) {// eliminate unnecessary search
            result.push(piece);
            var beforeChange = solutions.length;
            getAllSolutions(i + 1, s, wordDict, result, solutions, possible);
            if(solutions.length === beforeChange) {
                possible[i+1] = false;
            }
            result.pop();
        }
    }
}


var dict = new Set();
dict.add('leet');
dict.add('code');
dict.add('cod');
dict.add('de');

wordBreak('leetcode', dict)