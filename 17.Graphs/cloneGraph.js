/*
Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}

*/

function Node(val, neighbors) {
   this.val = val === undefined ? 0 : val;
   this.neighbors = neighbors === undefined ? [] : neighbors;
}


const cloneGraph = node => {
  console.log('node', node);

  if(!node) return null;

  const dfs = (start) => {
    const result = [];
    const visited = {};
    const adjacencyList = node.neighbors;

    const dfs = (vertex) => {
      if(!vertex) return null;
      visited[vertex] = true;
      console.log(vertex);
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]){
          return dfs(neighbor)
        }
      });
    };

    return result;
  }




};
