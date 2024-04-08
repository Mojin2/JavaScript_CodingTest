let dir = __dirname + "/11657.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const line = require("fs").readFileSync(path, "utf-8");
let input = line.trim().split("\n");

let [V, E] = input.shift().split(" ").map(Number);
input = input.map((el) => el.split(" ").map(Number));

let distance = Array(V + 1).fill(Infinity);

function bellman(start) {
  distance[start] = 0;

  for (let i = 0; i < V; i++) {
    for (let j = 0; j < E; j++) {
      let [cur, next, nextDistance] = input[j];

      if (
        distance[cur] !== Infinity &&
        distance[next] > distance[cur] + nextDistance
      ) {
        distance[next] = distance[cur] + nextDistance;
        if (i === V - 1) {
          return true;
        }
      }
    }
  }
  return false;
}
let answer = [];
let negativeCycle = bellman(1);
if (negativeCycle) console.log(-1);
else {
  for (let i = 2; i < V + 1; i++) {
    if (distance[i] === Infinity) answer.push(-1);
    else {
      answer.push(distance[i]);
    }
  }
}
console.log(answer.join("\n"));
