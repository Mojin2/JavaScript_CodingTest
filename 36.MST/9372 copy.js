let dir = __dirname + "/9372.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

let T = +input.shift();

for (let i = 0; i < input.length; i++) {
  let [N, M] = input[i].split(" ").map(Number);
  console.log(N - 1);

  i = i + M;
}
