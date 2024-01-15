let dir = __dirname + "/1991.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  setLeft(left) {
    this.left = left;
  }
  setRight(right) {
    this.right = right;
  }
}

let tree = {};

let V = +input.shift();
for (let option of input) {
  let [cur, left, right] = option.split(" ");
  tree[cur] = [left, right];
}
// preorder (전위)
let preorderResult = "";
function preorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  preorderResult += node;
  preorder(left);
  preorder(right);
}
// inorder (중위)
let inorderResult = "";
function inorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  inorder(left);
  inorderResult += node;
  inorder(right);
}
// postorder (후위)
let postorderResult = "";
function postorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  postorder(left);
  postorder(right);
  postorderResult += node;
}

preorder("A");
inorder("A");
postorder("A");

console.log(preorderResult);
console.log(inorderResult);
console.log(postorderResult);
