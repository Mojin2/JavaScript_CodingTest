// function solution(A, B) {
//   A = A.sort((a, b) => a - b);
//   B = B.sort((a, b) => a - b);
//   let count = 0;
//   let dic = {};
//   for (let i = 0; i < B.length; i++) {
//     dic[B[i]] = (dic[B[i]] || 0) + 1;
//   }
//   for (let i = 0; i < A.length; i++) {
//     let check = false;
//     let idx = 0;
//     for (let j = idx; j < B.length; j++) {
//       if (A[i] < B[j] && dic[B[j]] > 0) {
//         count++;
//         dic[B[j]] -= 1;
//         idx = j + 1;
//         break;
//       }
//       if (j === B.length - 1) {
//         check = true;
//       }
//     }
//     if (check) return count;
//   }

//   return count;
// }
function solution(A, B) {
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => a - b);
  let Aidx = 0;
  let Bidx = 0;
  let count = 0;
  while (true) {
    if (Bidx === B.length) break;

    if (A[Aidx] < B[Bidx]) {
      count++;
      Aidx++;
      Bidx++;
    }
    if (A[Aidx] >= B[Bidx]) {
      Bidx++;
    }
  }

  return count;
}

let A = [0, 4, 10, 2];
let B = [0, 3, 4, 2];

console.log(solution(A, B));
