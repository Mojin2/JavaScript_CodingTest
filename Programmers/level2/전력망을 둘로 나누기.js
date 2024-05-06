function solution(n, wires) {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < wires.length; i++) {
    let tree = Array.from(Array(n + 1), () => []);
    for (let j = 0; j < wires.length; j++) {
      if (i === j) continue;
      let [from, to] = wires[j];
      tree[from].push(to);
      tree[to].push(from);
    }

    let visited = Array(n + 1).fill(0);
    visited[0] = 1;

    let answer = [];
    for (let j = 1; j < visited.length; j++) {
      if (!visited[j]) {
        answer.push(cal(visited, j));
      }
    }
    function cal(visited, start) {
      let root = [start];
      function DFS(visited, start) {
        visited[start] = 1;
        for (let next of tree[start]) {
          if (!visited[next]) {
            root.push(next);
            DFS(visited, next);
          }
        }
      }
      DFS(visited, start);
      return root.length;
    }
    min = Math.min(Math.abs(answer[0] - answer[1]), min);
  }
  return min;
}

let n = 9;
let wires = [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
];
solution(n, wires);
