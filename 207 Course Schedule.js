// Leetcode #225
// Language: Javascript
// Problem: https://leetcode.com/problems/course-schedule/
// Author: Chihung Yu

// Non-recursion version 144ms
// more generic solution to problem that doesn't need information of numCourses and can deal with duplicated prerequisites

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var courseWithOtherCoursesDependOn = {};
    var courseDependsOnOtherCourses = {};
    
    prerequisites.forEach((prerequisite)=> {
        var prereqCourse = prerequisite[1];
        var courseToTake = prerequisite[0]
        
        
        courseWithOtherCoursesDependOn[prereqCourse] = courseWithOtherCoursesDependOn[prereqCourse] || new Set();
        courseWithOtherCoursesDependOn[prereqCourse].add(courseToTake);
        
        courseDependsOnOtherCourses[prereqCourse] = courseDependsOnOtherCourses[prereqCourse] || new Set();
        courseDependsOnOtherCourses[courseToTake] = courseDependsOnOtherCourses[courseToTake] || new Set();
        courseDependsOnOtherCourses[courseToTake].add(prereqCourse);
    });
    
    var courseWithNoDependencies = [];
    
    for(var i in courseDependsOnOtherCourses) {
        if(courseDependsOnOtherCourses[i].size === 0) {
            courseWithNoDependencies.push(i);
        }
    }
    
    while(courseWithNoDependencies.length > 0) {
        var rootCourse = courseWithNoDependencies.shift();
        
        if(courseWithOtherCoursesDependOn[rootCourse]) {
            courseWithOtherCoursesDependOn[rootCourse].forEach((childCourse)=> {
                courseDependsOnOtherCourses[childCourse].delete(parseInt(rootCourse));
                
                if(courseDependsOnOtherCourses[childCourse].size === 0) {
                    courseWithNoDependencies.push(childCourse + '');
                }
            });
        }
    }
    
    for(i in courseDependsOnOtherCourses) {
        if(courseDependsOnOtherCourses[i].size !== 0) {
            return false;
        }
    }
    
    return true;
};



// recursion 132ms

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

 // http://www.cnblogs.com/Liok3187/p/4752700.html

var constructGraph = function(numNodes, pre) {
    var nodes = [];
    for (var i = 0; i < numNodes; i++) {
        var node = {};
        node.neighbors = [];
        nodes.push(node);
    }
    for (var j = 0; j < pre.length; j++) {
        var requiredCourse = pre[j][1];
        var course = pre[j][0];
        // pushing course that require required-course to it's neighbor
        // when we go to the required-course, and traverse it's neighbors, we want to make sure that those neighbor doesn't have others that nodes
        // that required those neighbor plus those neighbor's required-course
        // example [1,0], [0,2], [2,1]
        // 1 required 0, 0 required 2, and 2 required 1
        // it creates loop
        nodes[requiredCourse].neighbors.push(nodes[course]);
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
        var parent = [];
        var hasCycle = dfs(nodes[i], parent);

        if (hasCycle) return false;
    }
    return true;
};


