let dir = __dirname + "/16928.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

let [options, ...arr] = input;
let [N, M] = options.split(" ").map(Number);
arr = arr.map((el) => el.split(" ").map(Number));
let ladder = arr.slice(0, N);
let ladderFirst = ladder.map((el) => el[0]);
let snake = arr.slice(N);
let snakeFirst = snake.map((el) => el[0]);

let board = Array.from(Array(10), (el, idx) =>
  Array(10)
    .fill(0)
    .map((_, id) => idx * 10 + id + 1)
);

// let visited = Array.from(Array(10), () => Array(10).fill(false));
let visited = Array(101).fill(false);
visited[0] = true;

let start = 1;
let end = 100;

let queue = [[1, 0]];

while (queue.length !== 0) {
  let [cur, time] = queue.shift();

  if (cur === 100) {
    return console.log(time);
  }

  visited[cur] = true;
  let tmp = [cur + 1, cur + 2, cur + 3, cur + 4, cur + 5, cur + 6];
  for (let i = 0; i < tmp.length; i++) {
    if (ladderFirst.includes(tmp[i])) {
      let idx = ladderFirst.indexOf(tmp[i]);
      tmp[i] = ladder[idx][1];
    }
    if (snakeFirst.includes(tmp[i])) {
      let idx = snakeFirst.indexOf(tmp[i]);
      tmp[i] = snake[idx][1];
    }
  }

  for (let next of tmp) {
    if (next >= 1 && next <= 100) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push([next, time + 1]);
      }
    }
  }
}
