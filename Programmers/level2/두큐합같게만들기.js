// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }
// class Deque {
//   constructor() {
//     this.init();
//   }
//   init() {
//     this.count = 0;
//     this.front = null;
//     this.rear = null;
//   }
//   shift() {
//     if (this.count === 0) return null;
//     let returnValue = this.front.value;
//     if (this.count === 1) {
//       this.init();
//     } else {
//       this.front = this.front.next;
//       this.front.prev = null;
//       this.count--;
//     }

//     return returnValue;
//   }
//   push(value) {
//     let node = new Node(value);
//     if (this.count === 0) {
//       this.front = node;
//       this.rear = node;
//       this.count++;
//     } else {
//       let cached = this.rear;
//       this.rear = node;
//       cached.next = node;
//       this.rear.prev = cached;
//       this.count++;
//     }
//   }
//   sum() {
//     let returnValue = 0;
//     let cur = this.front;
//     while (cur) {
//       returnValue += cur.value;
//       cur = cur.next;
//     }
//     return returnValue;
//   }
//   join() {
//     let str = "";
//     let cur = this.front;
//     while (cur) {
//       str += cur.value;
//       cur = cur.next;
//     }
//     return str;
//   }
//   isSame(arr) {
//     if (this.count === 0) return false;

//     let cur = this.front;
//     let idx = 0;
//     while (cur) {
//       if (cur.value === arr[idx]) {
//         cur = cur.next;
//         idx++;
//         continue;
//       } else {
//         return false;
//       }
//     }
//     return true;
//   }
// }

// function solution(queue1, queue2) {
//   let target =
//     (queue1.reduce((acc, cur) => acc + cur) +
//       queue2.reduce((acc, cur) => acc + cur)) /
//     2;

//   function cal(queue1, queue2, target) {
//     let count = 0;
//     let first = new Deque();
//     let second = new Deque();
//     for (let i = 0; i < queue1.length; i++) {
//       first.push(queue1[i]);
//       second.push(queue2[i]);
//     }
//     while (true) {
//       let sum = first.sum();
//       if (sum === target) return count;
//       if (sum < target) {
//         first.push(second.shift());
//         count++;
//       } else if (sum > target) {
//         second.push(first.shift());
//         count++;
//       }
//       if (first.isSame(queue1)) {
//         return -1;
//       }
//     }
//   }
//   return cal(queue1, queue2, target);
// }

function solution(queue1, queue2) {
  let target =
    (queue1.reduce((acc, cur) => acc + cur) +
      queue2.reduce((acc, cur) => acc + cur)) /
    2;
  let arr = queue1.concat(queue2);
  let prefixSum = Array(arr.length + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    prefixSum[i + 1] += prefixSum[i] + arr[i];
  }

  let startIdx = 0;
  let endIdx = queue1.length;
  let count = 0;
  while (true) {
    let sum = prefixSum[endIdx] - prefixSum[startIdx];
    if (sum === target) {
      return count;
    }
    if (sum > target) {
      startIdx++;
      count++;
      continue;
    }
    if (sum < target) {
      endIdx++;
      if (endIdx > queue1.length + queue2.length) return -1;
      count++;
      continue;
    }
  }
}
let queue1 = [1, 1];
let queue2 = [1, 5];
// [1, 2, 1, 2, 1, 10, 1, 2];
console.log(solution(queue1, queue2));
// 5
