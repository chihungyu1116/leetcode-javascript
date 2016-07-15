function conjuctNamesWithLimit(names, limit) {
  var left, right;
  
  if(names.length === 0) {
    return '';
  }
  
  if(limit === 0) {
    return names.length + ' more';
  }
  
  if(limit >= names.length) {
    left = names.slice(0, -1);
    right = names.slice(-1)[0];
    return left.join(', ') + ' and ' + right;
  } else {
    left = names.slice(0, limit);
    right = names.slice(limit);    
    return left.join(', ') + ' and ' + right.length + ' more';
  }
}

var data = [
  [],
  ['a','b'],
  ['a','b','c'],
  ['a','b','c','d']
]

for(var i = 0; i < 5; i++){
  data.forEach((d)=>{
    console.log(conjuctNamesWithLimit(d, i));
  });
}



console.log(conjuctNamesWithLimit(['alex', 'peter', 'jeremy'], 2) == 'alex, peter and 1 more');     
console.log(conjuctNamesWithLimit(['alex', 'peter', 'jeremy', 'joseph'], 2) == 'alex, peter and 2 more');
console.log(conjuctNamesWithLimit(['alex', 'peter', 'jeremy', 'joseph'], 3) == 'alex, peter, jeremy and 1 more');
console.log(conjuctNamesWithLimit(['alex', 'peter', 'jeremy', 'joseph'], 5) == 'alex, peter, jeremy and joseph');
