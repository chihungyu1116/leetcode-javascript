// There are a total of n courses you have to take, labeled from 0 to n - 1.

// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

// Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

// There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.

// For example:

// 2, [[1,0]]
// There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1]

// 4, [[1,0],[2,0],[3,1],[3,2]]
// There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. So one correct course order is [0,1,2,3]. Another correct ordering is[0,2,1,3].

// Note:
// The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.

// click to show more hints.

// Hide Company Tags Facebook Zenefits
// Hide Tags Depth-first Search Breadth-first Search Graph Topological Sort
// Hide Similar Problems (M) Course Schedule (H) Alien Dictionary (M) Minimum Height Trees


// 160ms

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
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
    

    // pretty much the same as Course Schedule I. Just need to add those non root
    var courseOrders = [];
    var hasCourseOrders = {};
    
    while(courseWithNoDependencies.length > 0) {
        var rootCourse = courseWithNoDependencies.shift();
        
        courseOrders.push(parseInt(rootCourse));
        hasCourseOrders[parseInt(rootCourse)] = true;
        
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
            return [];
        }
    }
    
    if(courseOrders.length < numCourses) {
        for(i = 0; i < numCourses; i++) {
            if(!hasCourseOrders[i]) {
                courseOrders.push(i);
            }
        }
    }
    
    return courseOrders;
};

console.log(findOrder(3, [[1,0]]));