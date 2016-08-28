// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

// You may assume that the intervals were initially sorted according to their start times.

// Example 1:
// Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].

// Example 2:
// Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].

// This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].

// Hide Company Tags LinkedIn Google Facebook
// Show Tags
// Show Similar Problems


/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
 
//  http://bangbingsyb.blogspot.com/2014/11/leetcode-insert-interval.html
var insert = function(intervals, newInterval) {
    var result = [];
    // Easier to consider if two sections are not overlapped
    // [s1, e1] [s2, e2] --> e2 < s1 or e1 < s2
    // once merged when two sections are overlapped, [min(s1,s2), max(e1,e2)]
    
    var isInsert = false;
    
    for(var i = 0; i < intervals.length; i++) {
        var interval = intervals[i];
        
        if(isInsert) {
            result.push(interval);
        } else if(newInterval.end < interval.start) { // insertion before the sorted interval
            result.push(newInterval);
            result.push(interval);
            isInsert = true;
        } else if(interval.end < newInterval.start) { // no overlap at all
            result.push(interval);
        } else {
            newInterval.start = Math.min(newInterval.start, interval.start);
            newInterval.end = Math.max(newInterval.end, interval.end);
        }
    }
     
    if(!isInsert) { // insertion at the very end;
        result.push(newInterval);
    }
    
    return result;
};