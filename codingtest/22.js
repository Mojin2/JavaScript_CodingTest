let data = [
  [1, 0, 3],
  [2, 1, 3],
  [3, 3, 2],
  [4, 9, 1],
  [5, 10, 2],
];

let queue = [];
let now = [];
let time = 0;
let answer = [];
while (true) {
  if (queue.length === 0 && now.length === 0 && data.length === 0) break;

  if (
    data.length >= 1 &&
    data[0][1] === time &&
    now.length === 0 &&
    queue.length === 0
  ) {
    now.push(data.shift());
  }
  if (now.length >= 1) {
    now[0][2] -= 1;
    if (now[0][2] === -1) {
      now.pop();
    }
  }
  if (data.length >= 1 && now.length >= 0 && data[0][1] === time) {
    queue.push(data.shift());
  }

  if (now.length === 0 && queue.length >= 1) {
    queue.sort((a, b) => a[2] - b[2]);
    queue.sort((a, b) => {
      if (a[2] === b[2]) {
        return a[0] - b[0];
      }
    });
    now.push(queue.shift());
  }
  console.log("+++++++", time, "+++++++");
  console.log("now", now);
  console.log("queue", queue);
  console.log("data", data);
  if (now[0] !== undefined) {
    answer.push(now[0][0]);
  }
  time += 1;
}
answer = Array.from(new Set(answer));
console.log(answer);
