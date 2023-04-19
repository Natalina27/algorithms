/*
Kruskal's algorithm is a greedy algorithm that works as follows −

1. It Creates a set of all edges in the graph.

2. While the above set is not empty and not all vertices are covered,

It removes the minimum weight edge from this set
It checks if this edge is forming a cycle or just connecting 2 trees. If it forms a cycle, we discard this edge, else we add it to our tree.
3. When the above processing is complete, we have a minimum spanning tree.
*/

import {Graph} from '../17.Graphs/implementationGraph.js';

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


