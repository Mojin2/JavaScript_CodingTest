let dir = __dirname + "/1991.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const N = +input.shift();
let result = "";

const tree = {};
for (let i = 0; i < N; i++) {
  const [node, left, right] = input[i].split(" ");
  tree[node] = [left, right];
}

function preorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  result += node;
  preorder(left);
  preorder(right);
}

preorder("A");
console.log(result);
