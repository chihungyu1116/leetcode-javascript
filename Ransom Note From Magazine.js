// Kidnapper kidnaps you and writes a ransom note. He does not write it with hand, as handwriting can put him in, so reaches to a magazine at table and creates ransom note. We need to find out given ransom string and magazine string, is it possible to create given ransom note. Kidnapper can use individual characters of words.



function ransomNoteFromMagazine(magazine, ransom) {
  var hash = {};
  var mLen = magazine.length;
  var rLen = ransom.length;
  var mIdx = 0;
  var rIdx = 0;

  while(rIdx < rLen) {
    var rc = ransom[rIdx];

    if(hash[rc] === undefined || hash[rc] === 0) {
      var found = false;

      while(mIdx < mLen) {
        var mc = magazine[mIdx];
        hash[mc] = hash[mc] || 0;
        hash[mc]++;  
        mIdx++;

        if(mc === rc) {
          found = true;
          break;
        }
      }

      if(!found) {
        return false;
      }
    }

    hash[rc]--;
    rIdx++;
  }

  return true;
}
