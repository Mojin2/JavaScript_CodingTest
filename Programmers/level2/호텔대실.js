function solution(book_time) {
  book_time = book_time
    .map((el) => {
      let tmp = el.map((book) => {
        let [hour, minute] = book.split(":").map(Number);
        return hour * 60 + minute;
      });
      return tmp;
    })
    .sort((a, b) => a[0] - b[0])
    .map((el) => [el[0], el[1] + 10]);

  let queue = [];
  let time = 0;
  let max = Number.MIN_SAFE_INTEGER;
  while (time <= 1440) {
    if (queue.length) {
      queue.sort((a, b) => b[1] - a[1]);
    }
    // 큐 제거
    while (queue.length && queue[queue.length - 1][1] === time) {
      queue.pop();
    }
    // 큐 추가
    book_time.forEach((book) => {
      if (book[0] === time) queue.push(book);
    });
    max = Math.max(max, queue.length);

    // 시간 증가
    time++;
  }
  return max;
}

let book_time = [
  ["15:00", "17:00"],
  ["17:10", "17:00"],
];

console.log(solution(book_time));
