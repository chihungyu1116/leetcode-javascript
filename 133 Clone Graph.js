/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */
/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
    var visited = {};
    
    if(graph === null){
        return graph;
    }else{
        return dfs(graph);
    }

    function dfs(node){
        var newNode = null;
        
        if(visited[node.label]){
            newNode = visited[node.label];
        }else{
            newNode = new UndirectedGraphNode(node.label);
            visited[node.label] = newNode;
        }
        
        for(var i = 0; i < node.neighbors.length; i++){
            if(!visited[node.neighbors[i].label]){
                newNode.neighbors.push(dfs(node.neighbors[i]));
            }else{
                newNode.neighbors.push(visited[node.neighbors[i].label]);
            }
        }
        return newNode; 
    }   
};