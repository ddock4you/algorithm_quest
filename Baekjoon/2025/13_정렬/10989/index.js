/*
백준 10989번: 수 정렬하기 3 - 메모리 최적화 완성
메모리 제한: 8MB (Python sys.stdin.readline 패턴)
해결 방법: readline 스트리밍 + 계수 정렬
*/

const readline = require('readline');
const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// readline 인터페이스 생성 (Python sys.stdin.readline과 동일한 역할)
const rl = readline.createInterface({
    input: process.platform === "linux" ? process.stdin : fs.createReadStream(filePath),
    output: process.stdout,
});

// 계수 정렬 배열 (유일한 지속 메모리)
const count = new Array(10001).fill(0);
let lineCount = 0;
let N = 0;

// 한 줄씩 읽어서 즉시 처리 (Python 패턴)
rl.on('line', (line) => {
    if (lineCount === 0) {
        N = parseInt(line);
    } else {
        count[parseInt(line)]++; // 각 입력값에 해당하는 인덱스 증가
    }
    lineCount++;
});

// 모든 입력 처리 완료 후 출력
rl.on('close', () => {
    // Python과 동일한 출력 로직
    for (let i = 1; i <= 10000; i++) {
        if (count[i] !== 0) {
            for (let j = 0; j < count[i]; j++) {
                console.log(i);
            }
        }
    }
});

