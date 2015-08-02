// Leetcode #211
// Language: Javascript
// Problem: https://leetcode.com/problems/add-and-search-word-data-structure-design/
// Author: Chihung Yu

var TrieNode = function(){
    this.iskey = false;
    this.children = [];
}



/**
 * @constructor
 */
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
    
    for(var i = 0; i < word.length; i++){
        var key = charKeyFromA(word[i]);
        if(!node.children[key]){
            node.children[key] = new TrieNode();
        }
        
        node = node.children[key];
    }
    
    node.iskey = true;
};

charKeyFromA = function(c){
    var a = 'a'.charCodeAt(0);
    return c.charCodeAt(0) - a;
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the data structure. A word could
 * contain the dot character '.' to represent any one letter.
 */
WordDictionary.prototype.search = function(word) {
    return searchWord(this.root, word, 0);
};

var searchWord = function(node, word, index){
    if(word.length === index){
        return node.iskey;
    }

    var c = word[index];
    
    if(c === "."){
        for(var i = 0; i < 26; i++){
            if(node.children[i] && searchWord(node.children[i], word, index+1)){
                return true;
            }
        }
        return false;
    } else {
        var key = charKeyFromA(c);
        return !!(node.children[key] && searchWord(node.children[key], word, index+1));
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var wordDictionary = new WordDictionary();
 * wordDictionary.addWord("word");
 * wordDictionary.search("pattern");
 */