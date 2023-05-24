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
    this.type = 'string';
  }

  addVertex(v) {
    if(typeof v === 'number'){
      this.adjList.set(String(v), []);
      this.type = 'number';
    }else{
      this.adjList.set(v, []);
    }

  }

  addEdge(v1, v2) {
    if(typeof v1 === 'number' || typeof v2 === 'number'){
      this.adjList.get(String(v1)).push(String(v2));
    } else {
      this.adjList.get(v1).push(v2);
    }
  }

  demukron() {
    let levels = [];
    let degree = [];

    for (const [key] of this.adjList) {
      const innerObj = {};
      innerObj[key] = 0;
      degree.push(innerObj);
    }

    for (const [key, value] of this.adjList) {
      for (let i = 0; i < value.length; i++) {
        const res = degree.find(el => Object.keys(el)[0] === value[i]);
        res[value[i]]++;
      }
    }

    while(true) {
      let currentLevels = [];
      for (let i = 0; i < degree.length; i++) {

        if (Object.values(degree[i])[0] === 0) {
          currentLevels.push(Object.keys(degree[i])[0]);
          degree[i] = -1; // sign as visited
        }
      }

      if (currentLevels.length === 0) break;

      levels.push(currentLevels);

      for (let i = 0; i < currentLevels.length; i++) {
        let vertex = this.adjList.get(currentLevels[i]);
        for (let j = 0; j < vertex.length; j++) {
          const res = degree.find(el => Object.keys(el)[0] === vertex[j]);
          res[vertex[j]]--;
        }
      }
    }

    if(this.type === 'string'){
      return levels;  //  [['A'], ['B', 'C'], ['D']]
    } else {
      return levels.map(el => Array.isArray(el)? el.map(inner => Number(inner)) : Number(el)); // [[0], [1, 2], [3]]
    }
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


