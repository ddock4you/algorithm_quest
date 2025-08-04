/*
TODO 제목: 알고리즘 수업 - 점근적 표기 1
! https://www.acmicpc.net/problem/24313
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [a1, a0] = input[0].split(" ").map((item) => Number(item));
let c = Number(input[1]);
let n = Number(input[2]);

const aCondition = (f) => Math.abs(f) >= 0 && Math.abs(f) <= 100;
const cnCondition = (cn) => cn >= 1 && cn <= 100;

// if (!aCondition(a1) || !aCondition(a0) || !cnCondition(c) || !cnCondition(n)) return console.log(0);
if (a0 < 0) n = n - a0;

if (a1 * n + a0 <= c * n) console.log(1);
else console.log(0);

/*
    참고
    https://dnd0707.tistory.com/15
    https://velog.io/@ichenny/%EB%B0%B1%EC%A4%80-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-24313%EB%B2%88-js
*/
