/*
TODO 제목: 최소공배수
! https://www.acmicpc.net/problem/13241
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((n) => +n);

const [a, b] = input;
const gcd = (a, b) => {
    while (b !== 0) {
        let rest = a % b;
        [a, b] = [b, rest];
    }
    return a;
};

console.log(String(BigInt((a * b) / gcd(a, b))));
