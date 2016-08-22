// Design a data structure that supports the following two operations:

// void addWord(word)
// bool search(word)
// search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

// For example:

// addWord("bad")
// addWord("dad")
// addWord("mad")
// search("pad") -> false
// search("bad") -> true
// search(".ad") -> true
// search("b..") -> true
// Note:
// You may assume that all words are consist of lowercase letters a-z.

// click to show hint.

// Hide Company Tags Facebook
// Hide Tags Backtracking Trie Design
// Hide Similar Problems (M) Implement Trie (Prefix Tree)

/**
 * @constructor
 */
 
function TrieNode(letter) {
    this.isWord = null;
    this.letter = letter;
    this.children = {};
}
 
var WordDictionary = function() {
    this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Adds a word into the data structure.
 */
WordDictionary.prototype.addWord = function(word) {
    var node = this.root;
    
    for(var i = 0; i < word.length; i++) {
        var ch = word[i];
        node.children[ch] = node.children[ch] || new TrieNode(ch);
        node = node.children[ch];
    }
    
    node.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the data structure. A word could
 * contain the dot character '.' to represent any one letter.
 */
WordDictionary.prototype.search = function(word) {
    var node = this.root;
    
    function searchWord(i, word, node) {
        if(i === word.length) {
            return node.isWord === true;
        }
        
        if(word[i] === '.') {
            for(var child in node.children) {
                if(searchWord(i + 1, word, node.children[child])) {
                    return true;
                }
            }
            
            return false;
        } else {
            return node.children[word[i]] !== undefined && searchWord(i + 1, word, node.children[word[i]]);
        }
    }
    
    return searchWord(0, word, node);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var wordDictionary = new WordDictionary();
 * wordDictionary.addWord("word");
 * wordDictionary.search("pattern");
 */