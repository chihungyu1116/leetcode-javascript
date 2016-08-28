// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei),
// find the minimum number of conference rooms required.

// For example,
// Given [[0, 30],[5, 10],[15, 20]],
// return 2.

// Hide Company Tags Google Facebook
// Hide Tags Heap Greedy Sort
// Hide Similar Problems (H) Merge Intervals (E) Meeting Rooms


/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */

var minMeetingRooms = function(intervals) {
    var schedule = {};
    
    intervals.forEach((interval)=>{
        schedule[interval.start] = schedule[interval.start] || 0;
        schedule[interval.start]++;
        
        schedule[interval.end] = schedule[interval.end] || 0;
        schedule[interval.end]--;
    });
    
    var maxRooms = 0;
    var rooms = 0;
    
    for(var i in schedule) {
        rooms += schedule[i];
        maxRooms = Math.max(maxRooms, rooms);
    }
    
    return maxRooms;
};

var data = [
  {start: 9, end: 12},
  {start: 2, end: 7},
  {start: 5, end: 17},
  {start: 12, end: 17},
]

console.log(minMeetingRooms(data));