class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjacencyMatrix = new Array(vertices).fill(null).map(() => new Array(vertices).fill(0));
  }


  addEdge(source, destination, weight) {
    this.adjacencyMatrix[source][destination] = weight;
    this.adjacencyMatrix[destination][source] = weight;
  }

  findMinimumSpanningTree() {
    const parent = new Array(this.vertices).fill(-1);

    // Array to store the key value of each vertex
    const key = new Array(this.vertices).fill(Number.MAX_VALUE);

    // Array to store whether a vertex is included in the minimum spanning tree
    const included = new Array(this.vertices).fill(false);

    // Set the key value of the first vertex to 0
    key[0] = 0;

    // Find the minimum spanning tree
    for (let i = 0; i < this.vertices - 1; i++) {
      // Find the vertex with the minimum key value that is not yet included in the minimum spanning tree
      let minKey = Number.MAX_VALUE;
      let minIndex = -1;
      for (let v = 0; v < this.vertices; v++) {
        if (!included[v] && key[v] < minKey) {
          minKey = key[v];
          minIndex = v;
        }
      }

      // Include the selected vertex in the minimum spanning tree
      included[minIndex] = true;

      // Update the key values and parent of the adjacent vertices
      for (let v = 0; v < this.vertices; v++) {
        if (this.adjacencyMatrix[minIndex][v] !== 0 && !included[v] && this.adjacencyMatrix[minIndex][v] < key[v]) {
          parent[v] = minIndex;
          key[v] = this.adjacencyMatrix[minIndex][v];
        }
      }
    }

    // Print the minimum spanning tree
    console.log("Minimum Spanning Tree:");
    for (let i = 1; i < this.vertices; i++) {
      console.log(`${parent[i]} - ${i}  Weight: ${this.adjacencyMatrix[i][parent[i]]}`);
    }
  }
}

// Create a graph
const graph = new Graph(5);

// Add edges to the graph
graph.addEdge(0, 1, 2);
graph.addEdge(0, 3, 6);
graph.addEdge(1, 2, 3);
graph.addEdge(1, 3, 8);
graph.addEdge(1, 4, 5);
graph.addEdge(2, 4, 7);
graph.addEdge(3, 4, 9);

// Find the minimum spanning tree
graph.findMinimumSpanningTree();
