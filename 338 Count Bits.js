// Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

// Example:
// For num = 5 you should return [0,1,1,2,1,2].

// Follow up:

// It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
// Space complexity should be O(n).
// Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.
// Show Hint 
// Credits:
// Special thanks to @ syedee for adding this problem and creating all test cases.

// Hide Tags Dynamic Programming Bit Manipulation
// Hide Similar Problems (E) Number of 1 Bits



var countBits = function(num) {
    var ans = [0];
    
    for(var i = 1; i <= num; i++) {
        ans[i] = (ans[i] || 0) + ans[i&(i-1)] + 1;
    }
    
    return ans;
};

// 0 0 0 1
// 0 0 1 0
// 0 0 1 1
// 0 1 0 0


console.log(countBits(3));