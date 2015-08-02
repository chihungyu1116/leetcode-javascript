// Leetcode #225
// Language: Javascript
// Problem: https://leetcode.com/problems/course-schedule/
// Author: Chihung Yu
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

var constructGraph = function(numNodes, pre) {
    var nodes = [];
    for (var i = 0; i < numNodes; i++) {
        var node = {};
        node.neighbors = [];
        nodes[i] = node;
    }
    for (var j = 0; j < pre.length; j++) {
        var s = pre[j][1];
        var d = pre[j][0];
        nodes[s].neighbors.push(nodes[d]);
    }
    return nodes;
}

// Return true if there is a cycle detected.
var dfs = function(startNode, parents) {
    if (parents.indexOf(startNode) >= 0) return true;
    if (startNode.visited) return false;
    
    startNode.visited = true;
    var neighbors = startNode.neighbors;
    parents.push(startNode);
    for (var i = 0; i < neighbors.length; i++) {
        var hasCycle = dfs(neighbors[i], parents);
        if (hasCycle) return true;
    }
    parents.pop();
}

var canFinish = function(numCourses, prerequisites) {
    var nodes = constructGraph(numCourses, prerequisites);
    
    for (var i = 0; i < nodes.length; i++) {
        console.log('nodes i',nodes[i])
        var hasCycle = dfs(nodes[i], []);
        if (hasCycle) return false;
    }
    return true;
};