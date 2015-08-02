/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    var len1 = word1.length,
        len2 = word2.length,
        matrix = [],
        i,
        j;
    
    if(len1 === 0 || len2 === 0) {
        return Math.max(len1, len2);
    }
    //initialization
    for(i = 0; i <= len1; i++) {
        matrix[i] = [];
        matrix[i][0] = i;
    }
    for (j = 0; j <= len2; j++) {
        matrix[0][j] = j;
    }
    
    for (i = 1; i <= len1; i++) {
        for (j = 1; j <= len2; j++) {
            if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) + 1;
            }
        }
    }
    return matrix[len1][len2];
};