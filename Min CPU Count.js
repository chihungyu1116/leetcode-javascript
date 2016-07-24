// 一个list of task， task纪录了开始时间，结束时间，需要的cpu 数量。 求最小的cpu数量可以满足complete all task without cpu deficit

var minCPU = function(intervals) {
    var schedule = {};
    
    intervals.forEach((interval)=>{
        schedule[interval.start] = schedule[interval.start] || 0;
        schedule[interval.start] += interval.cpu;
        
        schedule[interval.end] = schedule[interval.end] || 0;
        schedule[interval.start] -= interval.cpu;
    });
    
    var maxCpu = 0;
    var curCpu = 0;
    
    for(var i in schedule) {
        curCpu += schedule[i];
        maxCpu = Math.max(maxCpu, curCpu);
    }
    
    return maxCpu;
};