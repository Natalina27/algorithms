/*
Kruskal's algorithm is a greedy algorithm that works as follows −

1. It Creates a set of all edges in the graph.

2. While the above set is not empty and not all vertices are covered,

It removes the minimum weight edge from this set
It checks if this edge is forming a cycle or just connecting 2 trees. If it forms a cycle, we discard this edge, else we add it to our tree.
3. When the above processing is complete, we have a minimum spanning tree.
*/

import {Graph} from '../17.Graphs/implementationGraph.js';
import {PriorityQueue} from '../4.Basic_data_structures/HW/PriorityQueue/implementationPriorityQueue_SC.js'

class UnionFind {
  constructor(elements) {
    this.count = elements.length;
    this.parent = {};
    elements.forEach(e => (this.parent[e] = e));
  }

  union(a, b) {
    let rootA = this.find(a);
    let rootB = this.find(b);
    if (rootA === rootB) return;

    if (rootA < rootB) {
      if (this.parent[b] !== b) this.union(this.parent[b], a);
      this.parent[b] = this.parent[a];
    } else {
      if (this.parent[a] !== a) this.union(this.parent[a], b);
      this.parent[a] = this.parent[b];
    }
  }

  find(a) {
    while (this.parent[a] !== a) {
      a = this.parent[a];
    }
    return a;
  }

  connected(a, b) {
    return this.find(a) === this.find(b);
  }
}

let uf = new UnionFind(["A", "B", "C", "D", "E"]);
uf.union("A", "B"); uf.union("A", "C");
uf.union("C", "D");

// console.log(uf.connected("B", "E"));
// console.log(uf.connected("B", "D"));

Graph.prototype.kruskal = function(){
  const g = new Graph();
  let totalWeight = 0;
  this.vertices.forEach(vertex => g.addVertex(vertex));
  if (this.vertices.length === 0) {
    return g;
  }

  const edgeQueue = new PriorityQueue();

  for (let vertex in this.adjacencyList) {
    this.adjacencyList[vertex].forEach(edge => {
      edgeQueue.enqueue([vertex, edge.node], edge.weight);
    });
  }

  let uf = new UnionFind(this.vertices);

  while (!edgeQueue.isEmpty()) {
    let nextEdge = edgeQueue.dequeue();
    let nodes = nextEdge.val;
    let weight = nextEdge.priority;

    if (!uf.connected(nodes[0], nodes[1])) {
      g.addEdge(nodes[0], nodes[1], weight);
      uf.union(nodes[0], nodes[1]);
      totalWeight += weight;
    }
  }
  return {g, totalWeight: totalWeight};
}
let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addVertex("G");

g.addEdge("A", "C", 12);
g.addEdge("A", "B", 90);
g.addEdge("A", "D", 10);
g.addEdge("B", "G", 100);
g.addEdge("B", "D", 70);
g.addEdge("C", "D", 10);
g.addEdge("C", "F", 15);
g.addEdge("D", "E", 15);
g.addEdge("D", "G", 50);
g.addEdge("E", "F", 7);
g.addEdge("E", "G", 5);
// console.log('g', g);

/*
      12          15
 A-----------C-----------F
| \         /           /
|   \ 10   / 10        /7
|     \   /      15   /
| 90    D------------E
|     /   \         /
|   / 70    \50    /5
| /           \  /
B--------------G
      100
*/

console.log('kruskal',g.kruskal());
/*
                  15
 A           C--------- F
 \         /           /
   \ 10   / 10        /7
     \   /           /
       D            E
     /            /
   / 70          /5
 /              /
B              G

*/
