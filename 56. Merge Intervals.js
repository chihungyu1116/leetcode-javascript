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