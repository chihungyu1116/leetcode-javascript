/**
 * @param {number} n
 * @return {number}
 */
 // https://www.youtube.com/watch?v=YDf982Lb84o
var numTrees = function(n) {
    var result = [1, 1];
    
    for (var i = 2; i <= n; i++) {
        result[i] = 0;
        for (var j = 0; j < i; j++) {
            result[i] += result[j] * result[i - 1 - j];
        }
        
    }
    return result[n];
};


// var numTrees = function(n) {
//     var i,
//         j,
//         result = [];
    
//     result[0] = 1;
//     result[1] = 1;
    
//     for (i = 2; i <= n; i++) {
//         result[i] = 0;
//         for (j = 0; j < i; j++) {
//             result[i] += result[j] * result[i - 1 - j];
//             console.log(i, j, i - 1 - j, result)
//         }
        
//     }
//     return result[n];
// };


numTrees(4);


1, 2, 3, 4

j = r[0]
k = r[3]

j = r[1]
k = r[2]