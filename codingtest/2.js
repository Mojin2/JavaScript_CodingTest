function solution(edges) {
  let tmp = edges.reduce((acc, cur) => acc.concat(cur));
  let v = Math.max(...tmp);
  let graph = Array.from(Array(v + 1), () => []);
  for (let [from, to] of edges) {
    graph[from].push(to);
  }
  let created = 0;
  graph.forEach((el, idx) => {
    if (el.length > created) {
      created = idx;
    }
  });
  graph[created] = [];
  edges = edges.filter((el) => el[0] !== created);

  let queue = [];
  let visited = new Array(v + 1).fill(0);
  let startNode = edges[0][1];
  queue.push(startNode);
  visited[startNode] = 1;
  while (queue.length !== 0) {
    let cur = queue.shift();

    for (node of graph[cur]) {
      if (!visited[node]) {
        queue.push(node);
        visited[node] = 1;
      }
    }
  }
  console.log(graph);
}

let edges = [
  [2, 3],
  [4, 3],
  [1, 1],
  [2, 1],
];

solution(edges);
