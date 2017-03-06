// Given a collection of intervals, merge all overlapping intervals.

// For example,
// Given [1,3],[2,6],[8,10],[15,18],
// return [1,6],[8,10],[15,18].

// Hide Company Tags LinkedIn Google Facebook Twitter Microsoft Bloomberg Yelp
// Hide Tags Array Sort
// Hide Similar Problems (H) Insert Interval (E) Meeting Rooms (M) Meeting Rooms II

 /**
  * Definition for an interval.
  * function Interval(start, end) {
  *     this.start = start;
  *     this.end = end;
  * }
  */
 /**
  * @param {Interval[]} intervals
  * @return {Interval[]}
  */


 var merge = function(intervals) {
     var res = [];

     intervals.sort((i1, i2) => i1.start > i2.start ? 1 : -1 );

     if(intervals.length) {
         res.push(intervals[0]);
     }

     for(var i = 1; i < intervals.length; i++) {
         var interval = intervals[i];
         var last = res.pop();

         if(interval.start > last.end) {
             res.push(last);
             res.push(interval);
         } else {
             last.end = Math.max(last.end, interval.end);
             res.push(last);
         }
     }

     return res;
 };

//Another similar solution
 var merge = function(intervals) {
    if( intervals === null || intervals.length <= 0) {
        return intervals;
    }
    intervals.sort(function(a,b) { return a.start - b.start});
    var retIntervals = [];
    var i = 1;
    retIntervals.push(intervals[0]);
    console.log(retIntervals);
    while(i < intervals.length) {
        var lastTime = retIntervals[retIntervals.length - 1];
        var currentTime = intervals[i]
        if(lastTime.end < currentTime.start) {
            retIntervals.push(currentTime)
        }  else if(lastTime.end < currentTime.end) {
            retIntervals[retIntervals.length - 1].end = currentTime.end;
        }
        i++;
    }
    return retIntervals;
};
