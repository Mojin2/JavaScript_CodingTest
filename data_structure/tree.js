class Node {
  constructor(data) {
    this.data = data;
    //this.child = []; // 2진트리가 아닌 트리
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(data) {
    let init = new Node(data);
    this.root = init;
    this.data_count = 0;
  }

  length() {
    return this.data_count;
  }

  insert(data) {
    let new_node = new Node(data);
    let loop_node = this.root;

    while (loop_node) {
      if (data === loop_node.data) {
        return;
      }
      if (data < loop_node.data) {
        if (!loop_node.left) {
          loop_node.left = new_node;
          this.data_count++;
          return;
        }
        loop_node = loop_node.left;
      }
      if (data > loop_node.data) {
        if (!loop_node.right) {
          loop_node.right = new_node;
          this.data_count++;
          return;
        }
        loop_node = loop_node.right;
      }
    }
  }
  //DFS는 stack을 이용해서 구현
  DFS() {
    let result = [];
    let stack = [this.root];

    while (stack.length !== 0) {
      let current = stack.pop();
      if (current.right) {
        stack.push(current.right);
      }
      if (current.left) {
        stack.push(current.left);
      }
      result.push(current.data);
    }
    return result;
  }

  //BFS는 queue를 이용해서 구현
  BFS() {
    let result = [];
    let queue = [this.root];

    while (queue.length !== 0) {
      let current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      result.push(current.data);
    }
    return result;
  }
}

let t = new Tree(5);
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(9);

console.log(t.BFS());
