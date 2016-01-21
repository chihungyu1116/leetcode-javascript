// Leetcode 127
// Language: Javascript
// Problem: https://leetcode.com/problems/word-ladder/
// Author: Chihung Yu
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {set<string>} wordDict
 * @return {number}
 */
 
String.prototype.replaceAt = function(i, c){
    return this.substring(0,i) + c + this.substring(i+1);
};
 
var ladderLength = function(beginWord, endWord, wordDict) {
    if(beginWord === null || endWord === null || beginWord.length !== endWord.length || beginWord.length === 0 || endWord.length === 0){
        return 0;
    }  
    
    var queue = [];
    queue.push(beginWord);
    var visited = new Set();
    visited.add(beginWord);
    
    var level = 1;
    var curLvlCnt = 1;
    var nextLvlCnt = 0;
    
    while(queue.length !== 0){
        var cur = queue.shift();
        curLvlCnt--;
        
        for(var i = 0; i < cur.length; i++){
            for(var j = 0; j < 26; j++){
                var char = String.fromCharCode('a'.charCodeAt(0) + j);
                var word = cur.replaceAt(i,char);
                
                if(word === endWord){
                    return level + 1;
                }
                if(wordDict.has(word) && !visited.has(word)){
                    nextLvlCnt++;
                    queue.push(word);
                    visited.add(word);
                }
            }
        }
        if(curLvlCnt === 0){
            curLvlCnt = nextLvlCnt;
            nextLvlCnt = 0;
            level++;
        }
    }
    return 0;
};

