let dir = __dirname + "/5639.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  show() {
    return this.data;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.preOrderList = "";
    this.inOrderList = "";
    this.postOrderList = "";
  }

  insert(data) {
    let n = new Node(data, null, null);
    if (this.root == null) {
      this.root = n;
    } else {
      let current = this.root;
      let parent;
      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          if (current == null) {
            parent.left = n;
            break;
          }
        } else {
          current = current.right;
          if (current == null) {
            parent.right = n;
            break;
          }
        }
      }
    }
  }
}

let tree = new BST();
input.forEach((v) => tree.insert(+v));

let post = [];

function postOrder(node) {
  if (node != null) {
    postOrder(node.left);
    postOrder(node.right);
    post.push(node.data);
  }
}
postOrder(tree.root);
console.log(post.join("\n"));
