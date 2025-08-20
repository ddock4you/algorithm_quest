/*
TODO 제목: 수 정렬하기 3 - 백준 통과용 극한 최적화
! https://www.acmicpc.net/problem/10989
*/

const readline = require('readline');
const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
    crlfDelay: Infinity
});

const count = new Array(10001).fill(0);
let lineCount = 0;
let N = 0;

rl.on('line', (line) => {
    if (lineCount === 0) {
        N = parseInt(line);
    } else {
        count[parseInt(line)]++;
    }
    lineCount++;
});

rl.on('close', () => {
    for (let i = 1; i <= 10000; i++) {
        for (let j = 0; j < count[i]; j++) {
            console.log(i);
        }
    }
});
