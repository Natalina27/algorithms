class Graph {
  constructor() {
    this.adjList = new Map(); // Список смежности
  }

  addVertex(v) {
    this.adjList.set(v, []); // Добавляем вершины к точке
  }

  addEdge(v1, v2) {
    this.adjList.get(v1).push(v2); // Добавляем ребра
  }

  demukron() {
    let levels = [];
    let degree = Array.from({ length: this.adjList.size }, () => 0);

    for (const [key, value] of this.adjList) {
      for (let i = 0; i < value.length; i++) {
        degree[value[i]]++;
      }
    }

    while(true) {
      let currentLevels = [];
      console.log('degree', degree);
      for (let i = 0; i < degree.length; i++) { //[0,1,1,2] //[0,0,1,2]
        if (degree[i] === 0) {
          currentLevels.push(i);
          degree[i] = -1; // Помечаем вершину как посещенную
        }
      }

      console.log('currentLevels', currentLevels);
      if (currentLevels.length === 0) break;

      levels.push(currentLevels); // [[0]]

      console.log('levels', levels);
      for (let i = 0; i < currentLevels.length; i++) {
        let vertex = this.adjList.get(currentLevels[i]); // [1, 2]

        for (let j = 0; j < vertex.length; j++) {
          degree[vertex[j]]--;
        }
      }
    }

    console.log(degree); // Количество вхождений

    return levels; // [[0], [1, 2], [3]] -> [['A'], ['B', 'C'], ['D']]


  }
}

let graph = new Graph();

graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 3);

graph.demukron();
// let graph = new Graph();
//
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
//
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'D');
// graph.addEdge('C', 'D');
//
// graph.demukron();

