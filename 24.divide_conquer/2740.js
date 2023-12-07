let dir = __dirname + "/2740.txt";
const path = process.platform === "linux" ? "/dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

input = input.map((el) => el.split(" ").map(Number));

let [N, M] = input.shift();
let arr1 = input.slice(0, N);
let other = input.slice(N);
let [_, K] = other.shift();
let arr2 = other.slice(0, M);

let answer = Array.from(Array(N), () => Array(K).fill(0));
for (let i = 0; i < N; i++) {
  let front = arr1[i];
  for (let j = 0; j < K; j++) {
    let back = [];
    for (let z = 0; z < M; z++) {
      back.push(arr2[z][j]);
    }
    let tmp = 0;
    for (let a = 0; a < front.length; a++) {
      tmp += front[a] * back[a];
    }
    answer[i][j] = tmp;
  }
}
answer = answer.map((el) => el.join(" ")).join("\n");
console.log(answer);
