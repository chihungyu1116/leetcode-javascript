// Write a function to generate the generalized abbreviations of a word.

// Example:
// Given word = "word", return the following list (order does not matter):
// ["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
// Hide Company Tags Google
// Hide Tags

/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function(word) {
    var result = [];
    dfs(result, word, 0, '', 0);
    return result;
};

var dfs = function(result, word, pos, cur, count) {
    if(pos === word.length) {
        if(count > 0) {
            cur += count;
        }
        result.push(cur);
        return;
    }
    
    dfs(result, word, pos + 1, cur, count + 1);
    dfs(result, word, pos + 1, cur + (count > 0 ? count : '') + word[pos], 0);
}
