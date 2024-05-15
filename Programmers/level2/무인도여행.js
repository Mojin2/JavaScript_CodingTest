function solution(maps) {
  let visited = Array.from(Array(maps.length), () =>
    Array(maps[0].length).fill(0)
  );
  let answer = [];
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (!visited[i][j] && maps[i][j] !== "X") {
        answer.push(BFS(visited, maps, [i, j]));
      }
    }
  }
  if (answer.length === 0) return [-1];
  return answer.sort((a, b) => a - b);
}
let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];
function BFS(visited, maps, start) {
  let returnValue = +maps[start[0]][start[1]];
  let queue = [start];
  visited[start[0]][start[1]] = 1;

  while (queue.length > 0) {
    let [cx, cy] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nx = cx + dx[i];
      let ny = cy + dy[i];
      if (0 > nx || nx >= maps.length || 0 > ny || ny >= maps[0].length)
        continue;
      if (!visited[nx][ny] && maps[nx][ny] !== "X") {
        returnValue += Number(maps[nx][ny]);
        visited[nx][ny] = 1;
        queue.push([nx, ny]);
      }
    }
  }
  return returnValue;
}

let maps = ["XXX", "XXX", "XXX"];
console.log(solution(maps));
