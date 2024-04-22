let dir = __dirname + "/17472.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

let [n, m] = input.shift().split(" ").map(Number);
let board = input.map((el) => el.split(" ").map(Number));
let visited = Array.from(Array(n), () => Array(m).fill(0));

let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];

let islands = [];
let textIslands = [];

function BFS(start) {
  let queue = [start];
  visited[start[0]][start[1]] = 1;
  let tmp = [];
  while (queue.length > 0) {
    let [x, y] = queue.shift();
    tmp.push([x, y]);
    for (let i = 0; i < 4; i++) {
      nx = x + dx[i];
      ny = y + dy[i];

      if (0 <= nx && nx < n && 0 <= ny && ny < m) {
        if (board[nx][ny] === 1 && !visited[nx][ny]) {
          queue.push([nx, ny]);
          visited[nx][ny] = 1;
        }
      }
    }
  }
  islands.push(tmp);
  let text = tmp.map((el) => el.join(" "));
  textIslands.push(text);
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 1 && !visited[i][j]) {
      BFS([i, j]);
    }
  }
}

let routes = [];
for (let i = 0; i < islands.length; i++) {
  for (let j = 0; j < islands[i].length; j++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let k = 0; k < 4; k++) {
      let [x, y] = islands[i][j];
      let count = 0;
      while (true) {
        let nx = x + dx[k];
        let ny = y + dy[k];

        if (0 > nx || n <= nx || 0 > ny || m <= ny) break;
        if (board[nx][ny] === 1) {
          let target = [nx, ny].join(" ");
          for (let a = 0; a < islands.length; a++) {
            if (count >= 2 && i != a && textIslands[a].includes(target)) {
              routes.push([i, a, count]);
            }
          }
          break;
        }
        count++;
        [x, y] = [nx, ny];
      }
    }
  }
}

routes.sort((a, b) => a[2] - b[2]);
let parents = Array(islands.length)
  .fill(0)
  .map((el, idx) => idx);
let answer = 0;
routes.forEach((el) => {
  let [x, y, distance] = el;
  if (!isSame(x, y)) {
    union(x, y);
    answer += distance;
  }
});
let check = false;
for (let i = 0; i < islands.length - 1; i++) {
  for (let j = i; j < islands.length; j++) {
    if (!isSame(i, j)) {
      check = true;
    }
  }
}

if (check) {
  console.log(-1);
} else {
  console.log(answer);
}
// BFS를 돌며 모든 지역을 방문 했는지 주기적으로 확인
// MST뢰 최소 비용의 다리를 건설 >> 다리를 어떻게 만들것인가?
// 각 섬에서 갈 수 있는 모든 섬까지의 거리를 저장?

// MST
function find(x) {
  if (parents[x] === x) return x;
  return (parents[x] = find(parents[x]));
}
function union(x, y) {
  x = find(x);
  y = find(y);
  if (x != y) {
    if (x < y) {
      parents[y] = x;
    } else {
      parents[x] = y;
    }
  }
}
function isSame(x, y) {
  if (find(x) === find(y)) return true;
  else return false;
}
function distanceFromOther(i, j) {
  let x = Math.abs(i[0] - j[0]);
  let y = Math.abs(i[1] - j[1]);
  return +Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
