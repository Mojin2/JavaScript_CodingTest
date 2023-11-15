const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2580.txt"; // 제출시 삭제

const readline = require("readline");
const rl = readline.createInterface({
  // input: process.stdin, // 제출시 활성화
  input: fs.createReadStream(path), // 제출시 삭제
  output: process.stdout,
});

let input = [];
let list = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input.forEach((val) => {
    list.push(val.split(" ").map((el) => parseInt(el)));
  });
  solution(list);
  process.exit();
});
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let tmp = [];

const transpose = (original) => {
  const rowOfOrigin = original.length;
  const colOfOrigin = original[0].length;
  const transposed = Array.from({ length: colOfOrigin }, () =>
    new Array(rowOfOrigin).fill(0)
  );
  for (let i = 0; i < rowOfOrigin; i++) {
    for (let j = 0; j < colOfOrigin; j++) {
      [transposed[j][i]] = [original[i][j]];
    }
  }
  return transposed;
};
let count = 0;
function sdoku(array) {
  /// 종료조건 : 모든 스도쿠 array에 0이 포함되지 않을때
  let zeroCount = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] !== 0) {
        zeroCount += 1;
      }
    }
  }
  if (zeroCount === 81) {
    count++;
  }
  if (count === 1) {
    array = array.map((el) => el.join(" ")).join("\n");
    console.log(array);
    process.exit(0);
  }

  /// 스도쿠 백트래킹
  else {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] === 0) {
          let tmp = [];
          for (let a = i - (i % 3); a < i - (i % 3) + 3; a++) {
            for (let b = j - (j % 3); b < j - (j % 3) + 3; b++) {
              tmp.push(array[a][b]);
            }
          }
          let trans = transpose(array);

          let candidates = [];

          for (let k = 1; k <= 9; k++) {
            if (
              !array[i].includes(k) &&
              !trans[j].includes(k) &&
              !tmp.includes(k)
            ) {
              candidates.push(k);
            }
          }
          for (let candidate of candidates) {
            array[i][j] = candidate;
            sdoku(array);
            array[i][j] = 0;
          }
          return;
        }
      }
    }
  }
}
function solution(list) {
  sdoku(list);
}
