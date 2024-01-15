let dir = __dirname + "/2263.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let n = +input.shift();
let inO = input.shift().split(" ").map(Number);
let postO = input.shift().split(" ").map(Number);

let tree = {};
for (let i = 1; i <= n; i++) {
  tree[i] = [null, null];
}

console.log(tree);

// preorder (전위)
let preorderResult = [];
function preorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  preorderResult.push(node);
  preorder(left);
  preorder(right);
}

// inorder (중위)
let inorderResult = [];
function inorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  inorder(left);
  inorderResult.push(node);
  inorder(right);
}
// postorder (후위)
let postorderResult = [];
function postorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  postorder(left);
  postorder(right);
  postorderResult.push(node);
}
