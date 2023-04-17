class Graph {
  constructor(vertices) {
    this.V = vertices;
    this.graph = new Map();
  }

  addEdge(u, v) {
    if (!this.graph.has(u)) {
      this.graph.set(u, []);
    }
    this.graph.get(u).push(v);
  }

  DFSUtil(v, visited) {
    visited[v] = true;
    console.log(v);
    const adj = this.graph.get(v);
    if (adj) {
      adj.forEach(i => {
        if (!visited[i]) {
          this.DFSUtil(i, visited);
        }
      });
    }
  }

  fillOrder(v, visited, stack) {
    visited[v] = true;
    const adj = this.graph.get(v);
    if (adj) {
      adj.forEach(i => {
        if (!visited[i]) {
          this.fillOrder(i, visited, stack);
        }
      });
    }
    stack.push(v);
  }

  getTranspose() {
    const g = new Graph(this.V);
    this.graph.forEach((adj, i) => {
      adj.forEach(v => g.addEdge(v, i));
    });
    return g;
  }

  printSCCs() {
    const stack = [];
    const visited = Array(this.V).fill(false);
    this.graph.forEach((_, i) => {
      if (!visited[i]) {
        this.fillOrder(i, visited, stack);
      }
    });

    const gr = this.getTranspose();
    visited.fill(false);

    while (stack.length) {
      const i = stack.pop();
      if (!visited[i]) {
        gr.DFSUtil(i, visited);
        console.log("");
      }
    }
  }
}

const g = new Graph(5);
g.addEdge(1, 0);
g.addEdge(0, 2);
g.addEdge(2, 1);
g.addEdge(0, 3);
g.addEdge(3, 4);

g.printSCCs();
