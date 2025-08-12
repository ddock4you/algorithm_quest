/*
백준 10989번: 수 정렬하기 3 - C++ 패턴 + Node.js 최적화
메모리 제한: 8MB
시간 제한: 3초
*/

// Node.js 입출력 최적화 (C++의 ios_base::sync_with_stdio(false) 역할)
process.stdin.setEncoding('utf8');

function solve() {
    const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
    const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
    const trial = parseInt(input[0]);
    
    // C++ 패턴: 배열과 maximum 추적
    const counts = new Array(10001).fill(0);
    let maximum = 0;
    
    // 입력 처리와 동시에 최대값 추적
    for (let i = 1; i <= trial; i++) {
        const inputNum = parseInt(input[i]);
        counts[inputNum]++;
        if (inputNum > maximum) {
            maximum = inputNum;
        }
    }
    
    // 출력 최적화: process.stdout.write 사용
    let output = '';
    const BATCH_SIZE = 100000; // 배치 단위로 출력
    
    for (let i = 1; i <= maximum; i++) {
        while (counts[i] > 0) {
            output += i + '\n';
            counts[i]--;
            
            // 배치 크기에 도달하면 출력하고 버퍼 클리어
            if (output.length >= BATCH_SIZE) {
                process.stdout.write(output);
                output = '';
            }
        }
    }
    
    // 남은 출력 처리
    if (output) {
        process.stdout.write(output);
    }
}

solve();
