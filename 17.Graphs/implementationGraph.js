export class Graph{
  constructor() {
    this.adjacencyList = {};
    this.vertices = [];
  }
  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      this.vertices.push(vertex);
    }
  }

  addEdge(v1,v2,dir, weight) {
    if(weight){
      // this.adjacencyList[v1][v2] = weight;
      // this.adjacencyList[v2][v1] = weight;
      this.adjacencyList[v1].push({node:v2,weight});
      this.adjacencyList[v2].push({node:v1, weight});
    }else if(dir){
        this.adjacencyList[v1].push(v2);
    }else{
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }

  }

  removeVertex(vertex) {
    const edges = this.adjacencyList[vertex];
    console.log('index of 22 ', this.vertices.indexOf(22));
    const vertexIdx = this.vertices.indexOf(22);
    if(edges){
      edges.forEach(edge => {
        this.removeEdge(edge, vertex)
      });
      delete this.adjacencyList[vertex];
    }
    this.vertices = [...this.vertices.slice(0, vertexIdx), ...this.vertices.slice(vertexIdx+1)];
  }

  removeEdge(v1,v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }

  dfs(start) {
    const result = [];
    const visited = {};

    const adjacencyList = this.adjacencyList;

    (function dfs(vertex){
      if(!vertex) return null;
      visited[vertex] = true;
      console.log(vertex);
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]){
          return dfs(neighbor)
        }
      });
    })(start);

    console.log('result', result);
    return result;
  }

  DFSUtil(v, visited) {
    visited[v] = true;
    console.log(v);
    const adj = this.adjacencyList[v];
    if (adj) {
      adj.forEach(i => {
        if (!visited[i]) {
          this.DFSUtil(i, visited);
        }
      });
    }
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

//console.log('graph', graph);
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
graph.removeEdge(10,33);
//remove edge 10-33
//  27      33
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
33: []
}
 */
// add vertex 55 and edge 22-55
graph.addVertex(55);
graph.addEdge(22,55);
//  27      33
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
55: [22],
33: []
}
 */

//remove vertex 22
graph.removeVertex(22);
console.log('graph', graph);
//  27      33
//    \
//       10
//    /
//  13       55

/*
{
10: [13, 27],
13: [10],
27: [10],
33: [],
55: []
}
 */
graph.dfs(27);

