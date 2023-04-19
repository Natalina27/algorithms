/*
Dijkstra algorithm is used to find the shortest distance between two nodes inside a valid weighted graph.
Often used in Google Maps, Network Router etc.

Dijkstra's requires the input graph to have only one source node.
It also requires that all the edges in the graph have non-negative weights.
*/

import {Graph} from '../17.Graphs/implementationGraph.js';
import {PriorityQueue} from '../4.Basic_data_structures/HW/PriorityQueue/implementationPriorityQueue_SC.js'

Graph.prototype.Dijkstra = function (start, finish) {
  const nodes = new PriorityQueue();
  const distances = {};
  const previous = {};
  let path = [];
  let smallest;

  for (let vertex in this.adjacencyList) {
    if (vertex === start) {
      distances[vertex] = 0;
      nodes.enqueue(vertex, 0);
    } else {
      distances[vertex] = Infinity;
      nodes.enqueue(vertex, Infinity);
    }
    previous[vertex] = null;
  }

  while (nodes.values.length) {
    smallest = nodes.dequeue().val;
    if (smallest === finish) {
      while (previous[smallest]) {
        path.push(smallest);
        smallest = previous[smallest];
      }
      break;
    }
    if (smallest || distances[smallest] !== Infinity) {
      for (let neighbor in this.adjacencyList[smallest]) {
        let nextNode = this.adjacencyList[smallest][neighbor];
        let candidate = distances[smallest] + nextNode.weight;
        let nextNeighbor = nextNode.node;
        if (candidate < distances[nextNeighbor]) {
          distances[nextNeighbor] = candidate;
          previous[nextNeighbor] = smallest;
          nodes.enqueue(nextNeighbor, candidate);
        }
      }
    }
  }
  // console.log('distances', distances);
  // console.log('path', path);
  return {path: path.concat(smallest).reverse(), distance: distances[finish]};
}

const g = new Graph();
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
g.addEdge("C", "D", 10);
g.addEdge("D", "E", 15);
g.addEdge("E", "F", 7);
g.addEdge("B", "G", 100);
g.addEdge("E", "G", 5);
console.log('g', g);

/*
      12
A ----------- C
| \         /           F
|   \ 10   / 10        /7
|     \   /      15   /
| 90    D------------E
|                    |
|                    | 5
|                    |
B--------------------G
    100
*/

console.log(g.Dijkstra("A", "E"));//{ path: [ 'A', 'D', 'E' ], distance: 25 }
console.log(g.Dijkstra("B", "C"));//{ path: [ 'B', 'A', 'C' ], distance: 102 }
console.log(g.Dijkstra("B", "F"));//{ path: [ 'B', 'G', 'E', 'F' ], distance: 112 }

