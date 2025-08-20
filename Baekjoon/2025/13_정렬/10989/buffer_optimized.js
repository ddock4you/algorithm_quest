/*
TODO 제목: 수 정렬하기 3 - 버퍼 기반 극한 최적화
! https://www.acmicpc.net/problem/10989
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 백준 통과용 패턴: 최소 메모리 사용
const count = new Array(10001).fill(0);

// 입력을 Buffer로 읽어서 메모리 절약
const buffer = fs.readFileSync(filePath);
let pos = 0;

// 첫 번째 수 (N) 읽기
let N = 0;
while (pos < buffer.length && buffer[pos] !== 10) { // 10 = '\n'
    N = N * 10 + (buffer[pos] - 48); // 48 = '0'
    pos++;
}
pos++; // '\n' 건너뛰기

// 나머지 수들 읽기
for (let i = 0; i < N; i++) {
    let num = 0;
    while (pos < buffer.length && buffer[pos] !== 10) {
        num = num * 10 + (buffer[pos] - 48);
        pos++;
    }
    pos++; // '\n' 건너뛰기
    count[num]++;
}

// 결과 출력
for (let i = 1; i <= 10000; i++) {
    for (let j = 0; j < count[i]; j++) {
        console.log(i);
    }
}
