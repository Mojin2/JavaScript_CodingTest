const N = 3;
let count = 0;
function hanoi(number, from, to, other) {
  if (number === 0) {
    return;
  } else {
    hanoi(number - 1, from, other, to);
    console.log(`${from}에서 ${to}로 이동`);
    count++;
    hanoi(number - 1, other, to, from);
  }
}

hanoi(N, 1, 3, 2);
console.log(`${count}번 시행`);
