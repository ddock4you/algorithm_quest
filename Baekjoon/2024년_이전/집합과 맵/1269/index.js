/*
TODO 제목: 대칭 차집합
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
    .map((array) => array.split(" ").map((n) => +n));
let [a, b] = input;
const answer = new Set([...a, ...b]);
a = new Set(a);
b = new Set(b);

a.forEach((value) => {
    if (b.has(value)) {
        answer.delete(value);
    }
});

console.log(answer.size);
