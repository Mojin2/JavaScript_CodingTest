// 파일을 읽어오기 위해 Node.js의 built-in file system module fs사용
var fs = require("fs");

// input을 읽어와 변수로 선언하고 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
// 백준과 같은 리눅스 환경에서는 /dev/stdin으로 받아올 수 있음
var input = fs.readFileSync("/dev/stdin").toString().split(" ");

// input에서 지정한 value를 읽어와 다른 변수로 선언하고 활용
// toString메소드로 지금은 string이기 때문에, parseInt로 숫자로 형태변환을 해줌
var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a + b);
