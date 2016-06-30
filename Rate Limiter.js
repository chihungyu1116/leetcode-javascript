function* generator() {
  var rate = 5;
  var per = 8;
  var lastTime = Date.now();      
  var allowance = rate; // unit: messages

  while(true) {
    var currentTime = Date.now();
    var timeElapsed = (currentTime - lastTime)/1000;
    var lastTime = currentTime;
    var addedTime = timeElapsed*(rate/per);
    
    allowance += addedTime;
    
    
    console.log('allowance',allowance, addedTime);
    if(allowance > rate) {
      allowance = rate;
    }
    
    if (allowance < 1.0) {
      yield false;
    } else {
      allowance -= 1.0;
      yield true;
    }
  }
}
