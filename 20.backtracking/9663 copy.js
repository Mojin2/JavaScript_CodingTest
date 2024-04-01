const N = 4;

let tmp = [];
let count = 0;
let string = "";
function nqueen() {
  if (tmp.length === N) {
    string += tmp.join(" ") + "\n";
    count++;
    return;
  } else {
    for (let i = 1; i <= N; i++) {
      if (tmp.includes(i)) continue;

      let check = false;
      tmp.forEach((target) => {
        let abs = Math.abs(target - i);
        let index = Math.abs(tmp.indexOf(target) - tmp.length);
        if (abs === index) {
          check = true;
        }
      });

      if (check) {
        continue;
      } else {
        tmp.push(i);
        nqueen();
        tmp.pop();
      }
    }
  }
}
nqueen();
console.log(count);

// 1 2 3 4
// o
//
//
//
