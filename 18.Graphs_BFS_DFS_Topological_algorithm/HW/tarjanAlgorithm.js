class Graph {

  constructor(v) {
    this.V = v;
    this.adj = new Array(v);

    for (let i = 0; i < v; ++i)
      this.adj[i] = [];

    this.Time = 0;
  }

  addEdge(v, w) {
    this.adj[v].push(w);
  }

  SCCUtil(u, low, disc, stackMember, st) {
    disc[u] = this.Time;
    low[u] = this.Time;
    this.Time += 1;
    stackMember[u] = true;
    st.push(u);

    let n;

    for (let i of this.adj[u]) {
      n = i;

      if (disc[n] === -1) {
        this.SCCUtil(n, low, disc, stackMember, st);
        low[u] = Math.min(low[u], low[n]);
      } else if (stackMember[n] === true) {
        low[u] = Math.min(low[u], disc[n]);
      }
    }

    let w = -1;
    if (low[u] === disc[u]) {
      while (w !== u) {
        w = st.pop();
        document.write(w + " ");
        stackMember[w] = false;
      }
      document.write("<br>");
    }
  }

  SCC() {
    let disc = new Array(this.V);
    let low = new Array(this.V);
    for (let i = 0; i < this.V; i++) {
      disc[i] = -1;
      low[i] = -1;
    }

    let stackMember = new Array(this.V);
    let st = [];

    for (let i = 0; i < this.V; i++) {
      if (disc[i] === -1)
        this.SCCUtil(i, low, disc,
            stackMember, st);
    }
  }
}

let g1 = new Graph(5);

g1.addEdge(1, 0);
g1.addEdge(0, 2);
g1.addEdge(2, 1);
g1.addEdge(0, 3);
g1.addEdge(3, 4);
document.write("SSC in first graph <br>");
g1.SCC();

let g2 = new Graph(4);
g2.addEdge(0, 1);
g2.addEdge(1, 2);
g2.addEdge(2, 3);
document.write("\nSSC in second graph<br> ");
g2.SCC();

let g3 = new Graph(7);
g3.addEdge(0, 1);
g3.addEdge(1, 2);
g3.addEdge(2, 0);
g3.addEdge(1, 3);
g3.addEdge(1, 4);
g3.addEdge(1, 6);
g3.addEdge(3, 5);
g3.addEdge(4, 5);
document.write("\nSSC in third graph <br>");
g3.SCC();

let g4 = new Graph(11);
g4.addEdge(0, 1);
g4.addEdge(0, 3);
g4.addEdge(1, 2);
g4.addEdge(1, 4);
g4.addEdge(2, 0);
g4.addEdge(2, 6);
g4.addEdge(3, 2);
g4.addEdge(4, 5);
g4.addEdge(4, 6);
g4.addEdge(5, 6);
g4.addEdge(5, 7);
g4.addEdge(5, 8);
g4.addEdge(5, 9);
g4.addEdge(6, 4);
g4.addEdge(7, 9);
g4.addEdge(8, 9);
g4.addEdge(9, 8);
g4.SCC();

let g5 = new Graph(5);
g5.addEdge(0, 1);
g5.addEdge(1, 2);
g5.addEdge(2, 3);
g5.addEdge(2, 4);
g5.addEdge(3, 0);
g5.addEdge(4, 2);
g5.SCC();
