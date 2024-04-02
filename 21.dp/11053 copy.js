let dir = __dirname + "/11053.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const N = Number(input.shift());
const arr = input[0].split(" ").map(Number);

const dp = Array(N).fill(0);

console.log(dp);
