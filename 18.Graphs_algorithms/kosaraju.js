/*
Kosaraju's algorithm is a linear time algorithm to find the strongly connected components of a directed graph.

A directed graph is strongly connected if there is a path between all pairs of vertices.
A strongly connected component (SCC) of a directed graph is a maximal strongly connected subgraph.

A strongly connected component of a directed graph is a component in which we can visit all the vertices from any vertex in the component.

A simple way to think of directed graphs is to think of flight patterns.
Nodes are cities, edges are flights.
You may be able to fly to Chicago from New York, but not fly back to NYC from Chicago.
You can fly from LAX to Mexico City, Vancouver, Portland and Austin, and so that would be one node connecting to four other nodes via four edges.
*/

import {Graph} from '../17.Graphs/implementationGraph.js';
import {Stack} from '../4.Basic_data_structures/HW/Stack/implementationStackWithArray.js';

// Function to fill the stack with vertices in the order of their finishing times in DFS traversal
Graph.prototype.fillOrder = function (v, visited, stack) {
  visited[v] = true;
  const adj = this.adjacencyList[v];
  if (adj) {
    adj.forEach(i => {
      if (!visited[i]) {
        this.fillOrder(i, visited, stack);
      }
    });
  }
  stack.push(v);
}

// Function to get the transpose of the graph
Graph.prototype.getTranspose = function () {
  const newGraph = new Graph();
  Object.keys(this.adjacencyList).forEach((adj, i) => {
    this.adjacencyList[adj].forEach(v => {
      newGraph.addVertex(v);
      newGraph.addEdge(v,i,true)
    });
  });
  return newGraph;
}

// Function to print strongly connected components in the graph
Graph.prototype.printSCCs = function () {
  const stack = new Stack();
  const visited = Array(this.vertices.length).fill(false);

  Object.keys(this.adjacencyList).forEach((_, i) => {
    if (!visited[i]) {
      this.fillOrder(i, visited, stack);
    }
  });

  const gr = this.getTranspose();

  visited.fill(false);
  while (stack.items.length) {
    const i = stack.pop();
    if (!visited[i]) {
      gr.DFSUtil(i, visited);

      console.log("");
    }
  }
}

// Create a new directed graph with 5 vertices and add edges to it
const g = new Graph(5);
g.addVertex(0);
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);
g.addEdge(1, 0, true);
g.addEdge(0, 2, true);
g.addEdge(2, 1, true);
g.addEdge(0, 3, true);
g.addEdge(3, 4, true);

/*
1-->0----->3
^  /       |
| /        |
|v         v
2          4
*/

console.log("Following are strongly connected components in given graph");
g.printSCCs();
// 012 3 4
