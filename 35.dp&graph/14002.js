let dir = __dirname + "/14002.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

N = +input.shift();
let arr = input[0].split(" ").map(Number);

let dp = Array(N).fill(0);
dp[0] = 1;

let check = Array.from(Array(N), () => []);

for (let i = 1; i < arr.length; i++) {
  let tmp = arr.slice(0, i);
  let max = Number.MIN_SAFE_INTEGER;
  for (let j = 0; j < tmp.length; j++) {
    if (arr[i] > tmp[j]) {
      dp[i] = Math.max(dp[j] + 1, max);
      max = dp[i];
    }
  }
  if (dp[i] === 0) {
    dp[i] = 1;
  }
}
console.log(dp);

console.log(Math.max(...dp));
// [10 2 1 9 3]
//
//

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  insertNode(value) {
    const childNode = new Tree(value);
    this.children.push(childNode);
  }

  contains(value) {
    if (this.value === value) {
      return true;
    }

    for (let i = 0; i < this.children.length; i++) {
      const childNode = this.children[i];
      if (childNode.contains(value)) {
        return true;
      }
    }
    return false;
  }
}
