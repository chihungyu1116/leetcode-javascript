/**
 * @param {number[]} nums
 * @return {number}
 */

 // Kadane's algo
function maxSubArray(nums) {
    var max = -Infinity;
    var curMax = 0;
    var beg = 0;
    var end = 0;
    
    for(var i = 0; i < nums.length; i++) {
        var val = nums[i];
        
        curMax += val;
        
        if(curMax > max) {
            end = i;
            max = curMax;
        }
        
        if(curMax < 0) {
            beg = i + 1;
            curMax = 0;
        }
    }
        
    return {
        max: max,
        beg: beg,
        end: end
    };
};


// https://www.youtube.com/watch?v=yCQN096CwWM

var sampleData = [
    [ 2, 1,-3,-4, 5],
    [ 0, 6, 3, 4, 1],
    [ 2,-2,-1, 4,-5],
    [-3, 3, 1, 0, 3]
]

// move from left to right
function maximumRectangularSubmatrix(matrix) {
    var row = matrix.length;
    var col = matrix[0].length;
    var max = -Infinity;
    var maxTop = 0;
    var maxLeft = 0;
    var maxRight = 0;
    var maxBottom = 0;

    for(var left = 0; left < col; left++){
      var subArray = [];
      
      for(var right = left; right < col; right++){
        for(var i = 0; i < row; i++) {
            subArray[i] = subArray[i] || 0;
            subArray[i] += matrix[i][right];
        }
        
        var info = maxSubArray(subArray);
      
        if(info.max > max) {
            max = info.max;
            maxLeft = left;
            maxRight = right;
            maxTop = info.beg;
            maxBottom = info.end;
        }
      }
    }

    return {
      max: max,
      left: maxLeft,
      right: maxRight,
      top: maxTop,
      bottom: maxBottom
    }
}

console.log(maximumRectangularSubmatrix(sampleData));