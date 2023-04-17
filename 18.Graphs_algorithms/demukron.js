//directed, weighted
class DGraph {
  constructor() {
    this.vertices = [];
    this.adjacencyList = {};
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = {};
    }
    this.vertices.push(vertex);
  }

  addEdge(v1,v2, weight){
    this.adjacencyList[v1][v2] = weight;
  }

  demukronSort() {
    const sortedVertices = [];
    const visitedVertices = new Map();

    for (let i = 0; i < this.vertices.length; i++) {
      visitedVertices.set(this.vertices[i], false);
    }

    for (let i = 0; i < this.vertices.length; i++) {
      if (!visitedVertices.get(this.vertices[i])) {
        this.dfs(this.vertices[i], visitedVertices, sortedVertices);
      }
    }

    return sortedVertices;
  }

  dfs(vertex, visitedVertices, sortedVertices) {
    visitedVertices.set(vertex, true);

    const adjacencyList = this.adjacencyList[vertex];

    console.log('adjacencyList', adjacencyList);

    for (let i = 0; i < adjacencyList.length; i++) {
      const adjacentVertex = adjacencyList[i];

      if (!visitedVertices.get(adjacentVertex)) {
        this.dfs(adjacentVertex, visitedVertices, sortedVertices);
      }
    }

    sortedVertices.unshift(vertex);
  }
}

// const demukronAlgorithm = (graph, startNode) =>{
//   const distances = {};
//   const parents = {};
//   const visitedNodes = [];
//   let negativeCycle = false;
//
//   // Initialize distances to infinity except for startNode
//   for (let node in graph) {
//     distances[node] = Infinity;
//   }
//   distances[startNode] = 0;
//
//   // Find shortest path from startNode to all other nodes
//   for (let i = 0; i < Object.keys(graph).length - 1; i++) {
//     for (let node in graph) {
//       for (let neighbor in graph[node]) {
//         const weight = graph[node][neighbor];
//         const distanceFromStartToNeighbor = distances[node] + weight;
//
//         if (distanceFromStartToNeighbor < distances[neighbor]) {
//           distances[neighbor] = distanceFromStartToNeighbor;
//           parents[neighbor] = node;
//         }
//       }
//     }
//   }
//
//   // Check for negative cycle
//   for (let node in graph) {
//     for (let neighbor in graph[node]) {
//       const weight = graph[node][neighbor];
//       const distanceFromStartToNeighbor = distances[node] + weight;
//
//       if (distanceFromStartToNeighbor < distances[neighbor]) {
//         negativeCycle = true;
//         break;
//       }
//     }
//     if (negativeCycle) break;
//   }
//
//   // Build path from startNode to endNode
//   let path = [];
//   let currentNode = Object.keys(graph)[Object.keys(graph).length - 1];
//   while (currentNode !== startNode) {
//     path.unshift(currentNode);
//     currentNode = parents[currentNode];
//   }
//   path.unshift(startNode);
//
//   return { distances, path, negativeCycle };
// }


const dGraph = new DGraph();
dGraph.addVertex('A');
dGraph.addVertex('B');
dGraph.addVertex('C');
dGraph.addVertex('D');
dGraph.addEdge('A','B', -1);
dGraph.addEdge('A','C', 4);
dGraph.addEdge('B','D', 2);
dGraph.addEdge('C','B', 3);
dGraph.addEdge('C','D', 2);
console.log('dGraph', dGraph);

/*
      -1        2
A ---------> B-----> D
 \           |       ^
 4\          |       |
   \         |3      |2
     \       |       |
      v      v       |
      C --------------


      {
        A: {B: -1, C: 4},
        B: {D: 2},
        C: {B: 3, D: 2},
        D: {}
      }
 */



const sortedVertices = dGraph.demukronSort();

console.log(sortedVertices); // Output: ["A", "B", "E", "D", "C"]
