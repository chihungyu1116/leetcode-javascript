// Suppose you are at a party with n people (labeled from 0 to n - 1) and among them, there may exist one celebrity. The definition of a celebrity is that all the other n - 1 people know him/her but he/she does not know any of them.

// Now you want to find out who the celebrity is or verify that there is not one. The only thing you are allowed to do is to ask questions like: "Hi, A. Do you know B?" to get information of whether A knows B. You need to find out the celebrity (or verify there is not one) by asking as few questions as possible (in the asymptotic sense).

// You are given a helper function bool knows(a, b) which tells you whether A knows B. Implement a function int findCelebrity(n), your function should minimize the number of calls to knows.

// Note: There will be exactly one celebrity if he/she is in the party. Return the celebrity's label if there is a celebrity in the party. If there is no celebrity, return -1.

// Hide Company Tags LinkedIn Facebook
// Show Tags



/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
        var candidate = 0;
        
        // iterate through the list,
        // if candidate is known by i -> continue
        // if i doesnt know candidate, i becomes the candidate
        for(var i = 1; i < n; i++) {
            if(!knows(i, candidate)) {
                candidate = i;
            }
        }
        
        for(i = 0; i < n; i++) {
            if(i === candidate) {
                continue;
            }
            
            // if candidate is not known by i or candidate know i
            if(!knows(i, candidate) || knows(candidate, i)) {
                return -1;
            }
        }
        
        return candidate;
    };
};