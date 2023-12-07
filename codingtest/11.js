class Graph {
  constructor(nodes, edges) {
    this.nodes = nodes;
    this.edges = edges;
    this.adjList = new Map();

    // Initialize adjacency list
    for (let node of nodes) {
      this.adjList.set(node, []);
    }

    // Populate adjacency list with edges
    for (let edge of edges) {
      let [u, v] = edge;
      this.adjList.get(u).push(v);
      this.adjList.get(v).push(u);
    }
  }

  // Depth First Search (DFS) to calculate subtree sum
  dfs(node, visited, subtreeSum) {
    visited[node] = true;
    subtreeSum[node] = this.nodes[node - 1];

    for (let neighbor of this.adjList.get(node)) {
      if (!visited[neighbor]) {
        subtreeSum[node] += this.dfs(neighbor, visited, subtreeSum);
      }
    }

    return subtreeSum[node];
  }

  // Find minimum difference in subtree sums
  findMinDiff() {
    const visited = Array(this.nodes.length + 1).fill(false);
    const subtreeSum = Array(this.nodes.length + 1).fill(0);

    // Perform DFS from each node
    for (let i = 1; i <= this.nodes.length; i++) {
      if (!visited[i]) {
        this.dfs(i, visited, subtreeSum);
      }
    }

    let totalSum = subtreeSum.reduce((sum, val) => sum + val, 0);
    let minDiff = Infinity;

    // Iterate through edges and find minimum difference
    for (let edge of this.edges) {
      let [u, v] = edge;
      let diff = Math.abs(totalSum - 2 * subtreeSum[u]);
      if (diff < minDiff) {
        minDiff = diff;
      }
    }

    return minDiff;
  }
}

// Example usage
const nodes = [6, 5, 10, 9, 8, 4];
const edges = [
  [4, 1],
  [3, 2],
  [1, 6],
  [3, 5],
  [5, 1],
];

const graph = new Graph(nodes, edges);
const minDiff = graph.findMinDiff();
console.log(minDiff);
