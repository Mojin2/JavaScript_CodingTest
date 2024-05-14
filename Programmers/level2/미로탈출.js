function solution(maps) {
  let start = [];
  let lever = [];
  let exit = [];
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] === "S") start.push(i, j);
      if (maps[i][j] === "L") lever.push(i, j);
      if (maps[i][j] === "E") exit.push(i, j);
    }
  }
  function BFS(maps, start, end) {
    let dx = [0, 1, 0, -1];
    let dy = [1, 0, -1, 0];
    let n = maps.length;
    let m = maps[0].length;
    let queue = [[...start, 0]];
    let visited = Array.from(Array(n), () => Array(m).fill(0));

    while (queue.length > 0) {
      let [cx, cy, time] = queue.shift();
      if (cx === end[0] && cy === end[1]) return time;
      for (let i = 0; i < 4; i++) {
        nx = cx + dx[i];
        ny = cy + dy[i];
        if (0 > nx || nx >= n || 0 > ny || ny >= m) continue;
        if (maps[nx][ny] === "X") continue;
        if (!visited[nx][ny]) {
          visited[nx][ny] = 1;
          queue.push([nx, ny, time + 1]);
        }
      }
    }
    return false;
  }

  let first = BFS(maps, start, lever);
  let second = BFS(maps, lever, exit);
  if (!first || !second) return -1;
  else return first + second;
}

let maps = ["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"];
console.log(solution(maps));
