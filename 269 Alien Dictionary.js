var alienOrder = function(words) {
    if (words.length === 0) {
        return '';
    }
    
    const len = words.length;
    let map = {}; // value is the prerequisite of key
    let charPreReqCount = {};
    let i;
    let queue = [];
    let result = [];
    let hasCycle = false;
    
    for (i = 0; i < len; i++) {
        // wert vs woo
        // map : { w: [], e: [ 'o' ], r: [], t: [], o: [] } 
        // charPreReqCount : { w: 0, e: 0, r: 0, t: 0, o: 1 } 
        const chars = words[i].split('');
        
        let j = 0;
        
        for (j = 0; j < chars.length; j++) {
            if (!map[chars[j]]) {
                map[chars[j]] = [];
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
      
      
        // since words are in lexico order wert and woo -> ert vs oo, e will have higher order than oo
        if (j < prev.length && map[prev.charAt(j)].indexOf(cur.charAt(j)) === -1) {
            map[prev.charAt(j)].push(cur.charAt(j));
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
        const char = queue.shift();
        
        result.push(char);
        
        for (i = 0; i < map[char].length; i++) {
            charPreReqCount[map[char][i]]--;
            
            if (charPreReqCount[map[char][i]] === 0) {
                queue.push(map[char][i]);
            }
        }
    }
  
    Object.keys(charPreReqCount).forEach(function(char) {
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