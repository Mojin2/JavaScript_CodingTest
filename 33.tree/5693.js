let dir = __dirname + "/5693.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

input = input.map(Number);

class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(v) {
    if (v < this.value) {
      // left
      if (!this.left) this.left = new Tree(v);
      else this.left.insert(v);
    } else {
      // right
      if (!this.right) this.right = new Tree(v);
      else this.right.insert(v);
    }
  }
}

let root = new Tree(input.shift());
for (let node of input) {
  root.insert(node);
}

function postorder(node) {
  node.left && postorder(node.left);
  node.right && postorder(node.right);
  console.log(node.value);
}

postorder(root);
