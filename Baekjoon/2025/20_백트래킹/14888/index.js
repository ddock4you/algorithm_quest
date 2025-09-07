/*
TODO 제목: 연산자 끼워넣기
! https://www.acmicpc.net/problem/14888
*/

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
const operators = input[2].split(" ").map(Number); // [+, -, *, /]

let maxResult = -Infinity;
let minResult = Infinity;

function dfs(depth, currentVal) {
    // Base case: 모든 숫자를 다 사용했을 때
    if (depth === N) {
        maxResult = Math.max(maxResult, currentVal);
        minResult = Math.min(minResult, currentVal);
        return;
    }

    // 4가지 연산자에 대해 각각 시도
    for (let i = 0; i < 4; i++) {
        if (operators[i] > 0) {
            operators[i]--; // 연산자 사용

            let nextVal = currentVal;
            switch (i) {
                case 0: // +
                    nextVal += numbers[depth];
                    break;
                case 1: // -
                    nextVal -= numbers[depth];
                    break;
                case 2: // *
                    nextVal *= numbers[depth];
                    break;
                case 3: // /
                    // 문제의 정수 나눗셈 규칙을 따름
                    if (nextVal < 0) {
                        nextVal = -Math.floor(-nextVal / numbers[depth]);
                    } else {
                        nextVal = Math.floor(nextVal / numbers[depth]);
                    }
                    break;
            }

            dfs(depth + 1, nextVal);

            operators[i]++; // 백트래킹: 다음 경우의 수를 위해 연산자 개수 복원
        }
    }
}

// DFS 시작: 첫 번째 숫자를 초기값으로, 두 번째 숫자(인덱스 1)부터 연산을 시작
dfs(1, numbers[0]);

// -0이 출력되는 경우를 방지하기 위해 0으로 변환
if (maxResult === -0) {
    maxResult = 0;
}
if (minResult === -0) {
    minResult = 0;
}

console.log(maxResult);
console.log(minResult);