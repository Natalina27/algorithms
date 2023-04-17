class Graph{
  constructor(){
    this.adjacencyList = {};
  }
  addVertex(vertex){
    if(!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1,v2){
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1,v2){
    

  }

  removeVertex(){

  }
}

const graph = new Graph();
graph.addVertex(10);
graph.addVertex(13);
graph.addVertex(22);
graph.addVertex(27);
graph.addVertex(33);
graph.addEdge(10,13);
graph.addEdge(10,22);
graph.addEdge(10,27);
graph.addEdge(10,33);
console.log('graph', graph);
//  27      33
//    \     /
//       10
//    /     \
//  13      22

/*
{
10: [13, 22, 27, 33],
13: [10],
22: [10],
27: [10],
33: [10],
}
 */
//remove edge 10-33
//  27
//    \
//       10
//    /     \
//  13      22

/*
{
10: [13, 22, 27],
13: [10],
22: [10],
27: [10],
}
 */
// add vertex 55 and edge 22-55

//  27
//    \
//       10
//    /     \
//  13      22---55

/*
{
10: [13, 22, 27],
13: [10],
22: [10, 55],
27: [10],
55: [22]
}
 */

//remove vertex 22

