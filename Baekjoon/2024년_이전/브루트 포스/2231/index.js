/*
TODO 제목: 블랙잭
! https://www.acmicpc.net/problem/2798
*/

// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = Number(fs
//     .readFileSync(filePath)
//     .toString()
//     .trim());


// console.log(input);

// for (let i = 1;)

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs
    .readFileSync(filePath)
    .toString()
    .trim());

// let start = num - (num+"").length*9;
let answer = 0;
for (let i = 0; i < input; i += 1) {
    const sum = i.toString().split("").reduce((acc, number) => acc + Number(number), 0) + i;
    if (input === sum) {
        answer = i;
        break;
    }
}
console.log(answer);