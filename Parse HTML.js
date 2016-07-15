// Hulu


function parseHtml(htmlArr) {
  var context = [];
  var stack = [];
  
  for(var i = 0; i < htmlArr.length; i++){
    var htmlTag = htmlArr[i];
    
    if(htmlTag[0] === '/'){
      context = stack.pop();
    } else {
      var map = {};
      map[htmlTag] = [];
      context.push(map);
      stack.push(context);
      context = map[htmlTag];
    }
  }
  
  return context;
}




var htmlArr = [
  'html',
  'body',
  'div',
  'a',
  '/a',
  '/div',
  'div',
  'a',
  '/a',
  '/div',
  'div',
  'a',
  '/a',
  '/div',
  '/body',
  '/html'
];


console.log(parseHtml(htmlArr));
// will generate

/*
[{
  html: [{
    body: [{
      div: [{
        a: [{}]
      }]
    },{
      div: [{
        a: [{}]
      }]
    },{
      div: [{
        a: [{}]
      }]
    }]
  }]
}]
*/

