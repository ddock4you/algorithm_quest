/*
TODO 제목: 최소공배수
! https://www.acmicpc.net/problem/1934
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .slice(1)
    .map((v) => v.split(" ").map((n) => +n));

const gcd = (a, b) => {
    while (b !== 0) {
        let rest = a % b;
        [a, b] = [b, rest];
    }
    return a;
};

input.forEach(([a, b]) => {
    console.log((a * b) / gcd(a, b));
});

// 유클리드 호제법으로 최소공약수를 구한 뒤, 최소공배수를 구한다.

// 유클리드 호제법: a,b 두 수가 있고 b !== 0일 경우
// a % b로 나머지(rest)를 구하여 0인지 다시 확인,
// 아니라면 a = b, b = rest로 대입하여 나머지가 0이 나올때까지 계산했을 때 최종적으로 나오는 b의 값이 a, b 두 수의 최대공약수이다.
