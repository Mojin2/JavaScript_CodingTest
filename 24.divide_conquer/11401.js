let dir = __dirname + "/11401.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);

let p = 1000000007;
function cal(base, exp) {
  if (exp === 0) return 1;
  if (exp % 2 === 0) {
    let tmp = cal(base, exp / 2) % p;
    return (tmp * tmp) % p;
  }
  if (exp % 2 === 1) {
    let tmp = cal(base, (exp - 1) / 2) % p;
    return ((tmp * tmp) % p) * (base % p);
  }
}

function fac(n) {
  if (n === 1) return 1;
  else {
    return (n % p) * (fac(n - 1) % p);
  }
}

let result = (cal(((fac(N - K) % p) * fac(K)) % p, p - 2) % p) * (fac(N) % p);
console.log(result);
