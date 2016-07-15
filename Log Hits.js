//  void log_hit()
//  int get_hits() - Returns the number of hits in the last 6 minutes
// ...........
// [11,12,13,14,15,............] 6mins
// 6*60sec => 360
// [0,...,359]
// { time: timestamp, count: integer}
// lastTime: 1, count
// 丟掉盒子

class Node {
  constructor(time) {
    this.time = time;
    this.count = 0;
    this.next = null;
  }
}

class Logger {
  constructor(precision, seconds) {
    this.lastTimeHit = null;
    this.precision = precision; // 1 src
    this.seconds = seconds; // 360 seconds
    // this.count = []; // initialize later // linklist structure
    
    this.head = this.tail = new Node(this.getCurTimeInSec());
    this.count = 0;
    this.totalCount = 0;  
  }

  logHit() { // assume this log hit got hits more
    var curTimeInSec = this.getCurTimeInSec();
    
    if(curTimeInSec === this.lastTimeHit) {
      this.tail.count++;
    } else {
      var node = new Node(curTimeInSec);
      node.count+=;
      this.tail.next = node;
      this.tail = node;
      this.count++;
    }
    
    // 361 > 360
    if(this.count > this.seconds) {
      var next = this.head.next;
      this.head.next = null;
      this.head = next;
      this.totalCount -= this.head.count;
    }
    
    this.totalCount++;
    
  }

  getHits() {
    var curTime = this.getCurTimeInSec();
    var startTime = curTime - this.seconds; // 360 seconds 
    var discount = 0;
    
    while(this.head && this.head.time < startTime) {
      discount += this.head.count;
      var next = this.head.next;
      this.head.next = null;
      this.head = next;
    }
    
    if(this.head === null) {
      this.head = this.tail = new Node(curTime);
    }
    
    this.totalCount -= discount;
    
    return this.totalCount;
  }

  getCurTimeInSec() {
    var curTime = Date.now(); // assuming this is ms
    var curTimeInSec = Math.floor(curTime / 1000);
    return curTimeInSec;
  }
}


new Logger(1, 6);
// starting 123
// loghit 154

// head(123) -> node(154)
// tail at node(154)
//loghit 160

// head(123) -> node(154) -> node(160);
// tail at 160
// getHits() // curTime 510
// 510 - 360 = 150

// logHit at 100
// totalCount -> 1
// head(0) -> node(100)
// tail is at node(100)
// getHits at 500
// 500 - 360 = 140
// dicount += 0
// dicount += 1
// curHead === null
