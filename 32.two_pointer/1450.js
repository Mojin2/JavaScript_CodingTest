let dir = __dirname + "/1450.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let [N, C] = input[0].split(" ").map(Number);
let list = input[1].split(" ").map(Number);

let leftIndex = 0;
let rightIndex = 0;
