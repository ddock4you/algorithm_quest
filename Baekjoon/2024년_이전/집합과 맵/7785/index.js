/*
TODO 제목: 회사에 있는 사람
! https://www.acmicpc.net/problem/7785
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .slice(1)
    .map((value) => value.replace(/\r/g, "").split(" "));

const list = Object.fromEntries(input);
const result = Object.keys(list).reduce((array, key) => {
    list[key] === "enter" && array.push(key);
    return array;
}, []);

console.log(result.sort().reverse().join("\n"));
