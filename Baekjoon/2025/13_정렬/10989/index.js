/*
TODO 제목: 수 정렬하기 3
! https://www.acmicpc.net/problem/10989
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split('\n');
const N = parseInt(input[0]);

const count = new Array(N).fill(0);

for (let i = 1; i <= N; i++) {
    count[parseInt(input[i])]++;
}


for (let i = 1; i <= N; i++) {
    for (let j = 0; j < count[i]; j++) {
        console.log(i);
    }
}

