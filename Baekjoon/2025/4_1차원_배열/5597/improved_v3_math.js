/*
개선 버전 3: 수학적 접근 방식
시간복잡도: O(N) - 입력 처리 한 번, 계산은 O(1)
공간복잡도: O(1) - 상수 공간만 사용

원리: 
- 전체 합 = 1+2+...+30 = 30*31/2 = 465
- 전체 제곱합 = 1²+2²+...+30² = 30*31*61/6 = 9455
- 빠진 두 수를 a, b라고 하면:
  a + b = 전체합 - 입력합
  a² + b² = 전체제곱합 - 입력제곱합
- 연립방정식으로 a, b 계산 가능
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

// 1~30의 합과 제곱합 (수학 공식 사용)
const totalSum = 30 * 31 / 2;           // 465
const totalSquareSum = 30 * 31 * 61 / 6; // 9455

// 입력된 수들의 합과 제곱합 계산
let inputSum = 0;
let inputSquareSum = 0;

input.forEach(num => {
    if (num >= 1 && num <= 30) {
        inputSum += num;
        inputSquareSum += num * num;
    }
});

// 빠진 두 수의 합과 제곱합
const missingSum = totalSum - inputSum;           // a + b
const missingSquareSum = totalSquareSum - inputSquareSum; // a² + b²

// 연립방정식 해결
// a + b = missingSum
// a² + b² = missingSquareSum
// (a + b)² = a² + 2ab + b² = missingSum²
// 2ab = missingSum² - missingSquareSum
// ab = (missingSum² - missingSquareSum) / 2

const ab = (missingSum * missingSum - missingSquareSum) / 2;

// 이차방정식: x² - (a+b)x + ab = 0
// 해: x = ((a+b) ± √((a+b)² - 4ab)) / 2
const discriminant = missingSum * missingSum - 4 * ab;
const sqrtDiscriminant = Math.sqrt(discriminant);

const a = (missingSum + sqrtDiscriminant) / 2;
const b = (missingSum - sqrtDiscriminant) / 2;

// 정수 확인 및 결과 출력 (작은 수부터)
const result = [Math.round(a), Math.round(b)].sort((x, y) => x - y);
console.log(result.join('\n'));
