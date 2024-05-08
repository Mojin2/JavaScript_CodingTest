function solution(n, computers) {
  let visited = Array(n).fill(0);
  let graph = Array.from(Array(n), () => []);
  for (let i = 0; i < computers.length; i++) {
    for (let j = 0; j < computers[i].length; j++) {
      if (i === j) continue;
      if (computers[i][j] === 1) {
        graph[i].push(j);
      }
    }
  }

  function DFS(start, visited) {
    visited[start] = 1;

    for (let next of graph[start]) {
      if (!visited[next]) {
        DFS(next, visited);
      }
    }
    return 1;
  }
  let answer = 0;
  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) {
      answer += DFS(i, visited);
    }
  }
  return answer;
}

let n = 3;
let computers = [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
];

console.log(solution(n, computers));
