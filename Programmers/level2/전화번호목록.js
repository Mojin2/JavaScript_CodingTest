// 시간초과(1)
function solution(phone_book) {
  phone_book = phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].indexOf(phone_book[i]) === 0) return false;
  }
  return true;
}

// 시간초과(2)
// function solution(phone_book) {
//   phone_book = phone_book.sort();
//   let n = phone_book.length;
//   if (n === 1) return true;

//   let start = 0;
//   let end = 1;
//   while (end < n) {
//     if (phone_book[start][0] !== phone_book[end][0]) {
//       start = end;
//       end = end += 1;
//       continue;
//     }

//     let il = phone_book[start].length;
//     let jl = phone_book[end].length;
//     let len = Math.min(il, jl);
//     if (phone_book[start].slice(0, len) === phone_book[end].slice(0, len)) {
//       return false;
//     }
//   }
//   return true;
// }

let phone_book = ["119", "97674223", "1195524421"];
console.log(solution(phone_book));
