/*
개선 버전 2: Set 자료구조 방식
시간복잡도: O(N) - Set의 delete 연산이 평균 O(1)
공간복잡도: O(N) - Set에 최대 30개 요소 저장
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

// 1~30번 학생을 모두 포함하는 Set 생성
const allStudents = new Set();
for (let i = 1; i <= 30; i++) {
    allStudents.add(i);
}

// 제출한 학생들을 Set에서 제거 - O(28)
input.forEach(studentNumber => {
    if (studentNumber >= 1 && studentNumber <= 30) {
        allStudents.delete(studentNumber); // 평균 O(1)
    }
});

// 남은 학생들을 배열로 변환 후 정렬하여 출력
const notSubmitted = Array.from(allStudents).sort((a, b) => a - b);
console.log(notSubmitted.join('\n'));
