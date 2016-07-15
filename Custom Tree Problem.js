// a ---> b
// b ---> c
// b ---> d
// a ---> e 
// Print the tree that would form when each pair of these links that has the same character as start and end point is joined together. You have to maintain fidelity w.r.t. the height of nodes, i.e. nodes at height n from root should be printed at same row or column. For set of links given above, tree printed should be –

// -->a
//    |-->b
//    |   |-->c
//    |   |-->d
//    |-->e
// Note that these links need not form a single tree; they could form, ahem, a forest. Consider the following links

// a ---> b
// a ---> g
// b ---> c
// c ---> d
// d ---> e
// c ---> f
// z ---> y
// y ---> x
// x ---> w
// The output would be following forest.

// -->a
//    |-->b
//    |   |-->c
//    |   |   |-->d
//    |   |   |   |-->e
//    |   |   |-->f
//    |-->g

// -->z
//    |-->y
//    |   |-->x
//    |   |   |-->w

// http://ideone.com/l0QiJx
function printTree(data) {
   // 0 -> not seen, can possibly be root
   // 1 -> not root
   // 2 -> root

   var NOT_SEEN = 0;
   var NOT_ROOT = 1;
   var IS_ROOT = 2;

   var roots = Array(26).fill(NOT_SEEN);
   // [[neightbors],[neighbors],...] -> idx = 0 -> 'a'
   var graph = [];
   for(var i = 0; i < 26; i++){
      graph.push([]);
   }

   for(i = 0; i < data.length; i++) {
      var pair = data[i];
      var rootChar = pair[0];
      var rootIdx = charToIdx(rootChar);
      var depChar = pair[1];
      var depIdx = charToIdx(depChar);

      graph[rootIdx].push(depIdx);

      roots[depIdx] = NOT_ROOT;

      if(roots[rootIdx] === NOT_SEEN) {
         roots[rootIdx] = IS_ROOT;
      }
   }
  // console.log(roots);
   for(i = 0; i < roots.length; i++) {
      if(roots[i] === IS_ROOT) {
         dfs(i, 0, graph);
      }
   }
}

function charToIdx(char) {
   var base = 'a'.charCodeAt(0);
   return char.charCodeAt(0) - base;
}

function idxToChar(idx) {
   var base = 'a'.charCodeAt(0);
   return String.fromCharCode(base + idx);
}

function dfs(idx, level, graph) {
   var str = '';

   for(var i = 1; i <= level; i++) {
      str += '   |';
   }

   var char = idxToChar(idx);
   str += ('-->' + char);
   console.log(str);

   for(i = 0; i < graph[idx].length; i++) {
      var depIdx = graph[idx][i];
      dfs(depIdx, level + 1, graph);
   }
}



var data = [
   ['a', 'b'],
   ['a', 'g'],
   ['b', 'c'],
   ['c', 'd'],
   ['d', 'e'],
   ['c', 'f'],
   ['z', 'y'],
   ['y', 'x'],
   ['x', 'w']
];

console.log(printTree(data));