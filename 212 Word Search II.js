// Given a 2D board and a list of words from the dictionary, find all words in the board.

// Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

// For example,
// Given words = ["oath","pea","eat","rain"] and board =

// [
//   ['o','a','a','n'],
//   ['e','t','a','e'],
//   ['i','h','k','r'],
//   ['i','f','l','v']
// ]
// Return ["eat","oath"].
// Note:
// You may assume that all inputs are consist of lowercase letters a-z.

// click to show hint.

// Hide Company Tags Microsoft Google Airbnb
// Hide Tags Backtracking Trie
// Hide Similar Problems (M) Word Search



/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    var root = buildTrie(words);
    var result = [];
    
    for(var i = 0; i < board.length; i++) {
        for(var j = 0; j < board[0].length; j++) {
            searchWord(result, root, board, i, j);
        }
    }
    
    return result;
};

function searchWord(result, root, board, i, j) {
    if(root.word) {
        result.push(root.word);
        root.word = null;
    }
    
    if(i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
        return;
    }
    
    if(board[i][j] === '#' || !root.children[board[i][j]]) {
        return;
    }
    
    var ch = board[i][j];
    board[i][j] = '#';
    
    searchWord(result, root.children[ch], board, i+1, j);
    searchWord(result, root.children[ch], board, i-1, j);
    searchWord(result, root.children[ch], board, i, j+1);
    searchWord(result, root.children[ch], board, i, j-1)
    
    board[i][j] = ch;
}


function buildTrie(words) {
    var root = new TrieNode();
    
    for(var i = 0; i < words.length; i++) {
        var word = words[i];
        var node = root;
        
        for(var j = 0; j < word.length; j++) {
            var ch = word[j];
            
            node.children[ch] = node.children[ch] || new TrieNode();
            node = node.children[ch];
        }
        
        node.word = word;
    }
    
    return root;
}

class TrieNode {
    constructor() {
        this.word = null;
        this.children = {};
    }
}