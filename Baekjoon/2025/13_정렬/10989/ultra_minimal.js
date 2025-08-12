// 백준 10989번: 절대 최소 메모리 버전
// 모든 최적화 기법 총동원

const {readFileSync} = require('fs');
const a = new Array(10001).fill(0);
const d = readFileSync(process.platform === "linux" ? 0 : "./input.txt");
let p = 0, n = 0;

// N 파싱
while (d[p] !== 10) n = n * 10 + d[p++] - 48;
p++;

// 입력 파싱
for (let i = 0; i < n; i++) {
    let x = 0;
    while (d[p] !== 10) x = x * 10 + d[p++] - 48;
    p++;
    a[x]++;
}

// 출력
for (let i = 1; i <= 10000; i++) {
    for (let j = 0; j < a[i]; j++) {
        console.log(i);
    }
}
