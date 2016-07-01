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
        } else if(newInterval.end < interval.start) {
            result.push(newInterval);
            result.push(interval);
            isInsert = true;
        } else if(newInterval.start <= interval.end && interval.start <= newInterval.end){
            
            newInterval.start = Math.min(newInterval.start, interval.start);
            newInterval.end = Math.max(newInterval.end, interval.end);
            continue;
        } else {
            result.push(interval);
        }
    }
    
    if(!isInsert) {
        result.push(newInterval);
    }
    
    return result;
};