// There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

// For example,
// Given the following words in dictionary,

// [
//   "wrt",
//   "wrf",
//   "er",
//   "ett",
//   "rftt"
// ]
// The correct order is: "wertf".

// Note:
// You may assume all letters are in lowercase.
// If the order is invalid, return an empty string.
// There may be multiple valid order of letters, return any one of them is fine.
// Hide Company Tags Google Airbnb Facebook Twitter Snapchat Pocket Gems
// Hide Tags Graph Topological Sort
// Hide Similar Problems (M) Course Schedule II

/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    if (words.length === 0) {
        return '';
    }
    
    const len = words.length;
    let requiredCharMap = {}; // value is the prerequisite of key
    let charPreReqCount = {};
    let i;
    let queue = [];
    let result = [];
    let hasCycle = false;
    
    for (i = 0; i < len; i++) {
        // wert and woo
        // requiredCharMap : { w: [], e: [ 'o' ], r: [], t: [], o: [] } 
        // charPreReqCount : { w: 0, e: 0, r: 0, t: 0, o: 1 } 
        const chars = words[i].split('');
        
        let j = 0;
        
        for (j = 0; j < chars.length; j++) {
            if (!requiredCharMap[chars[j]]) {
                requiredCharMap[chars[j]] = [];
                charPreReqCount[chars[j]] = 0;
            }
        }
      
        // skip the first one || the same word
        if (i === 0 || words[i] === words[i - 1]) {
            continue;
        }
        
        const cur = words[i];
        const prev = words[i - 1];
        j = 0;
        
      
        // skip same words such as wert and woo will skip w and compare only ert vs oo
        while(j < cur.length && j < prev.length && cur.charAt(j) === prev.charAt(j)) {
            j++;
        }
      
      
        // since words are in lexico order. wert and woo after skipping w, they becomes ert and oo, e will have higher order than oo
        if (j < prev.length && requiredCharMap[prev.charAt(j)].indexOf(cur.charAt(j)) === -1) {
            requiredCharMap[prev.charAt(j)].push(cur.charAt(j));
            // number of prerequisite for using that char in this case it will be o: 1 since o has prerequisite e
            // { w: [], e: [ 'o' ], r: [], t: [], o: [] } 
            // { w: 0, e: 0, r: 0, t: 0, o: 1 } 
            charPreReqCount[cur.charAt(j)]++;
        }
    }
  
  
    // these will be the roots since there are no prerequisite needed to use them
    Object.keys(charPreReqCount).forEach(char => {
        if (charPreReqCount[char] === 0) {
            queue.push(char);
        }
    });
  
    // for those that we know are root
    while(queue.length > 0) {
        const rootChar = queue.shift();
        
        result.push(rootChar);
        
        for (i = 0; i < requiredCharMap[rootChar].length; i++) {
            var charRequiresRoot = requiredCharMap[rootChar][i];
            charPreReqCount[charRequiresRoot]--;
            
            if (charPreReqCount[charRequiresRoot] === 0) {
                queue.push(charRequiresRoot);
            }
        }
    }
  
    Object.keys(charPreReqCount).forEach((char) => {
        if (charPreReqCount[char] !== 0) {
            hasCycle = true;
        }
    });
  
    return hasCycle ? '' : result.join('');
}



// var words = [
//   "wrt",
//   "wrf",
//   "er",
//   "ett",
//   "rftt"
// ];


var words =[
  'wert',
  'woo'
];

console.log('ans', alienOrder(words));