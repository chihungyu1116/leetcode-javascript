// Given an array of words and a length L, format the text such that each line has exactly L characters and is fully (left and right) justified.

// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly L characters.

// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

// For the last line of text, it should be left justified and no extra space is inserted between words.

// For example,
// words: ["This", "is", "an", "example", "of", "text", "justification."]
// L: 16.

// Return the formatted lines as:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]
// Note: Each word is guaranteed not to exceed L in length.
// http://bangbingsyb.blogspot.com/2014/11/leetcode-text-justification.html
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    var result = [];
    var start = 0;
    var end = -1;
    var currentWordsLen = 0;
    var i = 0;
    
    while(i < words.length) {
        if(words[i].size > maxWidth) {
            return result;
        }
        
        var newLen = currentWordsLen + (end - start + 1) + words[i].length; // current words len + their spaces + new word
        
        if(newLen <= maxWidth) { // words[i] can fit in the current line
            end = i;
            currentWordsLen += words[i].length;
            i++;
        } else {
            var line = createLine(words, maxWidth, start, end, currentWordsLen, false);
            result.push(line);
            start = i;
            end = i - 1;
            currentWordsLen = 0;
        }
    }
    
    var lastLine = createLine(words, maxWidth, start, end, currentWordsLen, true);
    result.push(lastLine);
    return result;
};


function createLine(words, maxWidth, start, end, currentWordsLen, isLast) {
    var result = '';
    if(start < 0 || end >= words.length) {
        return result;
    }
    
    result += words[start]; // consume the first word
    var numberOfWords = end - start + 1; // number of words to insert in this line
    
    // special case: one word or last line - left justified
    if(numberOfWords === 1 || isLast) {
        for(var i = start + 1; i <= end; i++) { // start from start + 1 since we already append the first word
            result += (" " + words[i]);
        }
        
        var remainingSpaces = maxWidth - currentWordsLen - (numberOfWords - 1);
        for(i = 0; i < remainingSpaces; i++) {
            result += ' ';
        }
        
        return result;
    }
    
    var k = parseInt((maxWidth - currentWordsLen)/(numberOfWords - 1));
    var m = (maxWidth - currentWordsLen)%(numberOfWords - 1);
    
    for(i = start + 1; i <= end; i++) { // start from start + 1 since we already append the first word
        var nspace = i - start <= m ? k + 1: k;
        
        for(var j = 0; j < nspace; j++) {
            result += ' ';    
        }
        
        result += words[i];
    }
    
    return result;
}