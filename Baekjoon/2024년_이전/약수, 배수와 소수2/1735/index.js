/*
TODO 제목: 분수 합
! https://www.acmicpc.net/problem/1735
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

const [top1, bottom1] = input[0];
const [top2, bottom2] = input[1];
const additionTop = top1 * bottom2 + top2 * bottom1;
const additionBottom = bottom1 * bottom2;
const divisible = gcd(additionTop, additionBottom);

console.log(`${additionTop / divisible} ${additionBottom / divisible}`);
// console.log(String(BigInt((a * b) / gcd(a, b))));
