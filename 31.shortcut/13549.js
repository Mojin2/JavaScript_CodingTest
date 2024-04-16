let dir = __dirname + "/13549.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const line = require("fs").readFileSync(path, "utf-8");

let [N, K] = line.split(" ").map(Number);

let visited = Array(100001).fill(false);
let queue = [];
visited[N] = true;
queue.push([N, 0]);

while (queue.length > 0) {
  let [cur, time] = queue.shift();

  if (cur === K) {
    console.log(time);
    break;
  }
  for (let next of [cur * 2, cur - 1, cur + 1]) {
    if (next < 0 || next > 100000 || visited[next]) continue;

    if (next === cur * 2) {
      queue.unshift([next, time]);
    } else {
      queue.push([next, time + 1]);
    }
    visited[next] = true;
  }
}

// let tmp = [cur - 1, cur + 1, cur * 2];
//   for (let i = 0; i < tmp.length; i++) {
//     let next = tmp[i];
//     if (0 <= next && next <= max && !visited[next])
//       if (i === 0 || i === 1) {
//         queue.push([next, time + 1]);
//         visited[next] = 1;
//       } else {
//         queue.unshift([next, time]);
//         visited[next] = 1;
//       }
//   }
