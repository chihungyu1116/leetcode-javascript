var RATE = 5;
var PER = 8;
var SECOND_IN_MS = 1000;

function* RateLimiter(rate, per, cbFunc) {
  var lastTime = Date.now();
  var rate = rate;
  var per = per;
  var allowance = rate;
  
  
  while(true){
    var currentTime = Date.now();
    var elapsedTime = (currentTime - lastTime)/SECOND_IN_MS;    
    lastTime = currentTime;
    allowance += elapsedTime*(rate/per);
    
    
    if(allowance > rate) {
      allowance = rate; 
    } 
    
    if(allowance < 1.0) {
      yield cbFunc(false); 
    } else {
      allowance -= 1;
      yield cbFunc(true);
    }
  } 
}

var rl = RateLimiter(RATE, PER, function(output){
  console.log(output)
});

rl.next();
rl.next();
rl.next();
rl.next();
rl.next();

rl.next();

setTimeout(()=>{
  rl.next();
  rl.next();
},PER/RATE*SECOND_IN_MS);