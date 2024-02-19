/*
TODO 제목: 가로수
! https://www.acmicpc.net/problem/2485
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map((n) => +n));
// const [a, b] = input;
const gcd = (a, b) => {
    while (b !== 0) {
        let rest = a % b;
        [a, b] = [b, rest];
    }
    return a;
};

// console.log(String(BigInt((a * b) / gcd(a, b))));
