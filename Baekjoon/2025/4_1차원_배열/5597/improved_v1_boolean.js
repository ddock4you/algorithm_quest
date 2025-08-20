/*
개선 버전 1: 불리언 배열 방식
시간복잡도: O(N) - 각 요소를 한 번씩만 처리
공간복잡도: O(N) - 크기 31의 불리언 배열
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

// 1~30번 학생의 과제 제출 여부를 추적하는 불리언 배열
const submitted = new Array(31).fill(false); // 인덱스 0은 사용 안함, 1~30 사용

// 제출한 학생들을 표시 - O(28)
input.forEach(studentNumber => {
    if (studentNumber >= 1 && studentNumber <= 30) {
        submitted[studentNumber] = true;
    }
});

// 제출하지 않은 학생 찾기 - O(30)
const notSubmitted = [];
for (let i = 1; i <= 30; i++) {
    if (!submitted[i]) {
        notSubmitted.push(i);
    }
}

// 결과 출력 (자동으로 오름차순)
console.log(notSubmitted.join('\n'));
