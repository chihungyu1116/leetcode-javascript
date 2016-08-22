// The API: int read4(char *buf) reads 4 characters at a time from a file.

// The return value is the actual number of characters read. For example, it returns 3 if there is only 3 characters left in the file.

// By using the read4 API, implement the function int read(char *buf, int n) that reads n characters from the file.

// Note:
// The read function will only be called once for each test case.

// Hide Company Tags Facebook
// Hide Tags String
// Hide Similar Problems (H) Read N Characters Given Read4 II - Call multiple times


/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Maximum number of characters to read
     * @return {number} The number of characters read
     */
    return function(buf, n) {
        var eof = false;
        var total = 0;
        var temp = Array(4);
        
        while(!eof && total < n) {
            // read4 will populate temp with read characters, and return count ...
            var count = read4(temp);
        
            if(count < 4) {
                eof = true;
            }
            
            count = Math.min(count, n - total);
            
            for(var i = 0; i < count; i++) {
                buf[total++] = temp[i];
            }
        }
        
        return total;
    };
};