class MinHeap {
  constructor() {
    this.arr = [];
  }

  peek() {
    return this.arr[0] || null;
  }

  size() {
    return this.arr.length;
  }

  pollMin() {
    var arr = this.arr;
    var len = arr.length;

    if(len === 0) {
      return null;
    }

    var min = arr[0];
    arr[0] = arr[len - 1] // swap the last value with min value

    arr.pop();

    this.sinkDown(0);

    return min;
  }

  add(val) {
    var arr = this.arr;
    arr.push(val);
    this.bubbleUp(arr.length - 1);
  }

  bubbleUp(n) {
    var arr = this.arr;

    while(n > 0) {
      // [1,2,3] 1 as root 2 as left child and 3 as right child 
      // 2 has idx = 1 and 3 has idx = 2    1/2 will result in parent idx = 0 and 2/2 will result in parent idx = 1. So we need to add one to them and -1 at the end
      var parentN = Math.floor((n + 1)/2) - 1; 

      if(arr[parentN] <= arr[n]) {
        break;
      }

      var tmp = arr[n];
      arr[n] = arr[parentN];
      arr[parentN] = tmp;
      n = parentN;
    } 
  }

  sinkDown(n) {
    var arr = this.arr;
    var len = arr.length;
    var val = arr[n]

    while(true) {
      var swap = null;
      var child2N = (n+1)*2; // root = 0 right child idx is (0 + 1)*2 = 2
      var child1N = child2N - 1; // right child idx - 1 = 1 for root's left child
      if(child1N < len && arr[child1N] < val) {
        swap = child1N;
      }

      if(child2N < len && arr[child2N] < val && arr[child2N] <= arr[child1N]) {
        swap = child2N;
      }

      if(swap === null) {
        break;
      }

      var tmp = arr[n];
      arr[n] = arr[swap];
      arr[swap] = tmp;
      n = swap;
    } 
  }
}
 

var m = new MinHeap();

// m.add(4);
m.add(1);
m.add(-1);
m.add(1);
m.add(-1);
m.add(1);
m.add(-1);
m.add(-1);
m.add(1);
m.add(1);
console.log('debug', m.arr)
m.add(1);
// m.add(1);
// m.add(-1);

// console.log(m.arr);
console.log(m.pollMin());
console.log(m.pollMin());
console.log(m.pollMin());


console.log(m.arr);
console.log(m.pollMin());
console.log(m.pollMin());
console.log(m.pollMin());
console.log(m.pollMin());
 
console.log(m.pollMin());
console.log(m.pollMin());
console.log(m.pollMin());
// console.log(m.pollMin());

