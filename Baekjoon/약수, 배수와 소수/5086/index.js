/*
TODO 제목: 배수와 약수
! https://www.acmicpc.net/problem/5086
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((value) => Number(value)))
    .slice(0, -1);

input.forEach((array) => {
    if (array[1] % array[0] === 0) console.log("factor");
    else if (array[0] % array[1] === 0) console.log("multiple");
    else console.log("neither");
});
