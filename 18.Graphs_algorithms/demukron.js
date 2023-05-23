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
    let levels = [];
    let degree = [];

    for (const [key] of this.adjList) {
      const innerObj = {};
      innerObj[key] = 0;
      degree.push(innerObj);

    }

    for (const [key, value] of this.adjList) {
      for (let i = 0; i < value.length; i++) {
        const res = degree.find(el => Object.keys(el)[0] === String(value[i]));
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

    return levels; // [[0], [1, 2], [3]] -> [['A'], ['B', 'C'], ['D']]
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


