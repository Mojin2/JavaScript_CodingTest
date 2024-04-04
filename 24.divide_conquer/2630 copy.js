let dir = __dirname + "/2630.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const N = Number(input.shift());
let board = input.map((el) => el.split(" ").map(Number));
console.log(N);
