// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// For example,
// "A man, a plan, a canal: Panama" is a palindrome.
// "race a car" is not a palindrome.

// Note:
// Have you consider that the string might be empty? This is a good question to ask during an interview.

// For the purpose of this problem, we define empty string as valid palindrome.

// Hide Company Tags Microsoft Uber Facebook Zenefits
// Hide Tags Two Pointers String
// Hide Similar Problems (E) Palindrome Linked List


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    var beg = 0;
    var end = s.length - 1;
    
    while(beg < end) {
        if(!s[beg].match(/[a-z0-9]/)) {
            beg++;
        } else if(!s[end].match(/[a-z0-9]/)) {
            end--;
        } else if(s[beg] !== s[end]) {
            return false;
        } else {
            end--;
            beg++;
        }
    }
    
    return true;
};