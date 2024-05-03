function solution(orders) {
  let count = 0;
  let stack = [];
  for (let i = 1; i < orders.length; i++) {
    stack.push(i);

    while (stack.length !== 0 && stack[stack.length - 1] === orders[count]) {
      stack.pop();
      count++;
    }
  }

  return count;
}
// [1,2,3,4,5]
// stack = []
// order = [4,3,1,2,5]

// [2,3,4,5]
// stack = [1]
// order = [4,3,1,2,5]

// [3,4,5]
// stack = [1,2]
// order = [4,3,1,2,5]

// [4,5]
// stack = [1,2,3]
// order = [4,3,1,2,5]

// [5]
// stack = [1,2]
// order = [1,2,5]

// []
// stack = [1,2,5]
// order = [1,2,5]

// 1
let order = [4, 3, 1, 2, 5];
// [1,2,3,4,5]
console.log(solution(order));

// [1,2,3,4,5]

// stack=[1,2,5]
// 4 3
