/**
 * @constructor
 * Initialize your data structure here.
 */
//  http://www.cnblogs.com/Liok3187/p/4626730.html
var TrieNode = function(key) {
    return {
        key: key,
        isWord: false,
        children: {}
    }
};

var Trie = function() {
    this.root = TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Inserts a word into the trie.
 */
Trie.prototype.insert = function(word) {
    var tree = this.root;
    var i, curr;
    
    for(i = 0; i < word.length; i++) {
        curr = word[i];
        if(!tree.children[curr]) {
            tree.children[curr] = TrieNode(curr);
        }
        tree = tree.children[curr];
    }
    
    tree.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the trie.
 */
Trie.prototype.search = function(word) {
    var tree = this.root;
    
    for(var i = 0; i < word.length; i++) {
        var curr = word[i];
        
        if(!tree.children[curr]) {
            return false;
        }
        
        tree = tree.children[curr];
    }
    
    return tree.isWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 * Returns if there is any word in the trie
 * that starts with the given prefix.
 */
Trie.prototype.startsWith = function(prefix) {
    var tree = this.root;
    
    for(var i = 0; i < prefix.length; i++) {
        var curr = prefix[i];
        
        if(!tree.children[curr]) {
            return false;
        }
        
        tree = tree.children[curr];
    }
    
    return true;    
};

/**
 * Your Trie object will be instantiated and called as such:
 * var trie = new Trie();
 * trie.insert("somestring");
 * trie.search("key");
 */