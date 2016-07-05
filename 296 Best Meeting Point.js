// A group of two or more people wants to meet and minimize the total travel distance. You are given a 2D grid of values 0 or 1, where each 1 marks the home of someone in the group. The distance is calculated using Manhattan Distance, where distance(p1, p2) = |p2.x - p1.x| + |p2.y - p1.y|.

// For example, given three people living at (0,0), (0,4), and (2,2):

// 1 - 0 - 0 - 0 - 1
// |   |   |   |   |
// 0 - 0 - 0 - 0 - 0
// |   |   |   |   |
// 0 - 0 - 1 - 0 - 0
// The point (0,2) is an ideal meeting point, as the total travel distance of 2+2+2=6 is minimal. So return 6.

// Show Hint 
// Show Company Tags
// Show Tags
// Show Similar Problems


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minTotalDistance = function(grid) {
    var xpos = [];
    var ypos = [];
    
    // get all positions
    for(var x = 0; x < grid.length; x++) {
        for(var y = 0; y < grid[0].length; y++) {
            if(grid[x][y] === 1) {
                xpos.push(x);
                ypos.push(y);
            }
        }
    }
    
    // no need to sort x
    return getMedianPoint(xpos) + getMedianPoint(ypos, true);
};

var getMedianPoint = function(arr, shouldSort) {
    if(shouldSort) {
        arr.sort((a,b)=> {
            return a > b ? 1 : -1;
        });
    }
    
    var beg = 0;
    var end = arr.length - 1;
    var res = 0;
    
    while(beg < end) {
        res += arr[end--] - arr[beg++];
    }
    
    return res;
}