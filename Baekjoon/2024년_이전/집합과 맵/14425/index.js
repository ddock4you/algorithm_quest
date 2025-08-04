/*
TODO 제목: 문자열 집합
! https://www.acmicpc.net/problem/14425
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map((number) => +number);
const words = input.slice(1).map((word) => word.replace(/\r/g, ""));
const nWords = new Set(words.slice(0, n));
const mWords = words.slice(n);

const result = mWords.reduce((acc, word) => (nWords.has(word) ? (acc += 1) : acc), 0);

console.log(result);
