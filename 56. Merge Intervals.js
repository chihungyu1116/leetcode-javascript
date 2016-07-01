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
    
    // http://yucoding.blogspot.com/2013/01/leetcode-question-51-merge-intervals.html
    
    var result = [];
    
    if(!intervals || intervals.length === 0) {
        return result;
    }
    
    intervals.sort((a, b)=> {
        return a.start > b.start ? 1 : -1;
    });
    
    result.push(intervals[0]);
    
    for(var i = 1; i < intervals.length; i++) {
        var topOfResult = result[result.length - 1];
        var interval = intervals[i];
        
        if(topOfResult.end >= interval.start) {
            topOfResult.end = Math.max(topOfResult.end, interval.end);
        } else {
            result.push(interval);
        }
    }
    
    return result;
};