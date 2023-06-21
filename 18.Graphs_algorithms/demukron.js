/*
Demukron's algorithm is used to find a topological sort
in a directed acyclic graph (DAG) and discover its levels.

A directed acyclic graph (DAG) is a graph in which nodes
are connected by directed edges in such a way that it is
not possible to return to the original vertex by following
these edges.

The peculiarity of the algorithm is that it returns the levels of the graph.
A graph level is a group of vertices that can be traversed at the same time,
if we go from vertices without incoming edges to vertices without outgoing edges.

The algorithm works like this:
1. At the first step of the algorithm, all vertices without incoming edges are found.
   They constitute the first "level" of the graph.
2. Then these vertices are removed from the graph along with all the edges outgoing from them.
3. Steps 1 and 2 are repeated for the remaining graph until all vertices have been removed.
   Each new "level" is added to the result.

Used to solve problems that involve sorting elements based on their dependencies.
This can be useful, for example, when planning a project when some tasks cannot be started until others are completed.
*/

class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(v) {
    this.adjList.set(v, []);
  }

  addEdge(v1, v2) {
    this.adjList.get(v1).push(v2);
  }

  demukron() {
    const levels = [];
    const degree = new Map();

    for (const vertex of this.adjList.keys()) {
      degree.set(vertex, 0);
    }

    for (const [vertex, neighbors] of this.adjList) {
      for (const neighbor of neighbors) {
        degree.set(neighbor, degree.get(neighbor) + 1);
      }
    }

    while (true) {
      const currentLevels = [];

      for (const [vertex, vertexDegree] of degree) {
        if (vertexDegree === 0) {
          currentLevels.push(vertex);
          degree.set(vertex, -1);
        }
      }

      if (!currentLevels.length) break;

      levels.push(currentLevels);

      for (const vertex of currentLevels) {
        let neighbors = this.adjList.get(vertex);

        for (const neighbor of neighbors) {
          degree.set(neighbor, degree.get(neighbor) - 1);
        }
      }
    }

    return levels;
  }
}

let graph = new Graph();

// graph.addVertex(0);
// graph.addVertex(1);
// graph.addVertex(2);
// graph.addVertex(3);
//
// graph.addEdge(0, 1);
// graph.addEdge(0, 2);
// graph.addEdge(1, 3);
// graph.addEdge(2, 3);

/*

         0
       /    \
      /      \
     v        v
     1        2
     \        /
      \      /
        \   /
          v
          3
*/

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

/*

         A
       /    \
      /      \
     v        v
     B        C
     \        /
      \      /
        \   /
          v
          D
*/

console.log(graph.demukron());


