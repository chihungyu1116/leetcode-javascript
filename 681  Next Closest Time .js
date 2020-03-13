// Given a time represented in the format "HH:MM", form the next closest time by reusing the current digits. There is no limit on how many times a digit can be reused.

// You may assume the given input string is always valid. For example, "01:34", "12:09" are all valid. "1:34", "12:9" are all invalid.

// Example 1:

// Input: "19:34"
// Output: "19:39"
// Explanation: The next closest time choosing from digits 1, 9, 3, 4, is 19:39, which occurs 5 minutes later.  It is not 19:33, because this occurs 23 hours and 59 minutes later.
// Example 2:

// Input: "23:59"
// Output: "22:22"
// Explanation: The next closest time choosing from digits 2, 3, 5, 9, is 22:22. It may be assumed that the returned time is next day's time since it is smaller than the input time numerically.




// Approach #1: Simulation [Accepted]
// Intuition and Algorithm

// Simulate the clock going forward by one minute. Each time it moves forward, if all the digits are allowed, then return the current time.

// The natural way to represent the time is as an integer t in the range 0 <= t < 24 * 60. Then the hours are t / 60, the minutes are t % 60, and each digit of the hours and minutes can be found by hours / 10, hours % 10 etc.

/**
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function(time) {
    let cur = 60 * parseInt(time.substring(0, 2));
    cur += parseInt(time.substring(3));
    const allowed = new Set();

    for(var i = 0; i < time.length; i++) {
  	    if (time[i] !== ':') {
  		    allowed.add(parseInt(time[i]));
  	    }
    }
    
    while(true) {
        cur = (cur + 1) % (24*60);
        var curTime = [
            Math.floor(cur / 60 / 10), // hour 24 -> 2
            Math.floor(cur / 60) % 10, // hour 24 -> 4
            Math.floor((cur % 60) / 10), // minutes 59 -> 5
            cur % 60 % 10, // minutes 59 -> 9
        ];

        for(i = 0; i < curTime.length; i++) {
            var t = curTime[i];            
            if (!allowed.has(t)) {
                break;
            }
            if (i === curTime.length - 1) {
                let hour = Math.floor(cur / 60);
                let min = cur % 60;
                
                if (hour < 10) {
                    hour = '0' + hour;
                } else {
                    hour = '' + hour;
                }
                
                if (min < 10) {
                    min = '0' + min;
                } else {
                    min = '' + min;
                }
                
                return hour + ':' + min;
            }
        }
    }
};