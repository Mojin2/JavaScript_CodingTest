const list = {
  head: {
    value: 90,
    next: {
      value: 10,
      next: {
        value: 89,
        next: {
          value: 100,
          next: null,
        },
      },
    },
  },
};

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;

    this.now = undefined;
    this.data_count = 0;
  }

  length() {
    return this.data_count;
  }

  append(data) {
    let new_node = new Node(data);

    this.tail.next = new_node;
    this.tail = new_node;
    this.data_count++;
  }

  toString() {
    let loop_node = this.head;
    loop_node = loop_node.next;

    let s = "";
    for (let i = 0; i < this.data_count; i++) {
      s += `${loop_node.data}, `;
      loop_node = loop_node.next;
    }
    return `[${s.slice(0, -2)}]`;
  }

  get fullData() {
    let loop_node = this.head;
    loop_node = loop_node.next;

    let s = "";
    for (let i = 0; i < this.data_count; i++) {
      s += `${loop_node.data}, `;
      loop_node = loop_node.next;
    }
    return JSON.parse(`[${s.slice(0, -2)}]`);
  }

  insert(index, data) {
    let loop_node = this.head;
    loop_node = loop_node.next;

    for (let i = 0; i < index - 1; i++) {
      loop_node = loop_node.next;
    }

    let new_node = new Node(data);
    new_node.next = loop_node.next;
    loop_node.next = new_node;

    this.data_count++;
  }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.insert(1, 3);
console.log(l.toString());
console.log(l.fullData);
