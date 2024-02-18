/*
TODO 제목: 듣보잡
! https://www.acmicpc.net/problem/1269
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .slice(1)
    .map((v) => +v);
const [a, b] = input[0].split(" ").map((n) => +n);
const neverHeard = new Set(input.slice(1, n + 1));
const neverSeen = input.slice(n + 1);

const neverHeardAndSeen = neverSeen.reduce((acc, value) => {
    if (neverHeard.has(value)) acc.push(value);
    return acc;
}, []);

console.log(`${neverHeardAndSeen.length}\n${neverHeardAndSeen.sort().join("\n")}`);
