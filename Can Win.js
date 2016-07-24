// CanWin. 给一个数组比如 和一个index比如4，从这个index每次可以向左或者向右跳ary的距离， 如果能跳到值为0的index则返回true。


function canWin(arr) {
  if(!arr || arr.length === 0) {
    return false;
  }

  var visitedIdx = {};
  var unvisited = [];
  unvisited.push(0);

  while(unvisited.length > 0) {
    var curVisitIdx = unvisited.shift();

    if(visitedIdx[curVisitIdx] === undefined) {
      visitedIdx[curVisitIdx] = true;

      if(arr[curVisitIdx] === 0) {
        return true;
      }

      unvisited.push(curVisitIdx + arr[curVisitIdx]);
      unvisited.push(curVisitIdx - arr[curVisitIdx]);
    }
  }

  return false;
}

var arr = [3,3,6,2,0,2];
// win path 0 3 1 4
console.log(canWin(arr));
