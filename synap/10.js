let money = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000];

let pay = 100000; // pay는 maxMoney의 배수
let maxMoney = 50000; // 보유한 화폐 중 최고 단위
function countPay(pay, maxMoney) {
  let multiple = ((pay + maxMoney) / maxMoney) % Math.pow(10, 10);
  for (let i = 0; i < 9; i++) {
    multiple = (multiple * multiple) % Math.pow(10, 10);
  }
}
countPay(pay, maxMoney);

function countWaysToPay(m, denominations) {
  const dp = new Array(m + 1).fill(BigInt(0));
  const waysByDenomination = Array(denominations.length).fill(BigInt(0));
  let answer = Array(denominations.length).fill(BigInt(0));

  dp[0] = BigInt(1);
  answer[0] = BigInt(1);
  for (let i = 0; i < denominations.length; i++) {
    const coin = BigInt(denominations[i]);
    for (let j = coin; j <= m; j++) {
      dp[j] += dp[j - coin];
      waysByDenomination[i] = dp[j];
    }
  }
  for (let i = 1; i < answer.length; i++) {
    let tmp = waysByDenomination[i] - waysByDenomination[i - 1];
    if (tmp <= 0) {
      break;
    }
    answer[i] = tmp;
  }

  for (let i = 0; i < denominations.length; i++) {
    console.log(`${denominations[i]}원 단위의 경우의 수 : ${answer[i]}가지`);
  }
  console.log(answer.reduce((acc, cur) => acc + cur));
  //////////////////////////////////////////////////////////////
  let a9 = BigInt(100000 ** 9) / BigInt(487417781882912);
  let arr = [a9];
  let asdf = Number(answer[7] * a9) / Math.pow(10, 7);
  console.log(BigInt(parseInt(asdf)));
  for (let i = 1; i < answer.length - 1; i++) {
    let tmp = (answer[i] * a9) / BigInt(100000 ** i);
    console.log((tmp * BigInt(100000 ** i)) / a9);
    arr.push(tmp);
  }
  let sum = arr.reduce((acc, cur) => acc + cur);
  let ans = sum % BigInt(10 ** 10);

  let asd = BigInt(100000 ** 9);
  for (let i = 8; i >= 0; i--) {
    asd += BigInt(100000 ** i) * arr[i];
  }
  //   console.log(asd / a9);
  return dp[m].toString(10);
}

countWaysToPay(100000, money);

// let a9 = BigInt(100000 ** 9) / BigInt(487417781882912);
// console.log(a9);
