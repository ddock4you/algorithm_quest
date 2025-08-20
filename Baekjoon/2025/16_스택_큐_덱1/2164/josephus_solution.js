/*
TODO 제목: 카드2 - 요세푸스 수학적 해법
! https://www.acmicpc.net/problem/2164
* 요세푸스 문제의 수학적 해법 사용
* 시간복잡도: O(1) 
* 공간복잡도: O(1)
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

if (input < 1 || input > 500000) return;

// 방법 1: 비트 연산을 이용한 O(1) 해법 (수정됨)
function josephusBitOperation(n) {
  // 특별한 경우: n=1일 때는 1이 답
  if (n === 1) return 1;
  
  // n보다 작거나 같은 최대 2의 거듭제곱 찾기
  let powerOf2 = 1;
  while (powerOf2 * 2 <= n) {
    powerOf2 *= 2;
  }
  
  const l = n - powerOf2;
  
  // 올바른 공식:
  // - l = 0 (n이 2의 거듭제곱): 답 = n  
  // - l > 0: 답 = 2*l
  if (l === 0) {
    return n;
  }
  return 2 * l;
}

// 방법 2: 재귀적 해법 (O(log n))
function cardGameRecursive(n) {
  // 특별한 경우: n=1일 때는 1이 답
  if (n === 1) return 1;
  
  // n이 짝수인 경우: f(n) = 2 * f(n/2) - 1 (단, n > 2)
  // n이 홀수인 경우: f(n) = 2 * f((n-1)/2) + 1
  if (n === 2) return 2;
  
  if (n % 2 === 0) {
    return 2 * cardGameRecursive(n / 2) - 1;
  } else {
    return 2 * cardGameRecursive((n - 1) / 2) + 1;
  }
}

// 방법 3: 비트 시프트를 이용한 더 효율적인 O(1) 해법 (수정됨)
function josephusBitShift(n) {
  // 특별한 경우: n=1일 때는 1이 답
  if (n === 1) return 1;
  
  // n을 이진수로 변환했을 때의 패턴 이용
  // n = 2^k + l 형태로 분해 (l < 2^k)
  
  const k = Math.floor(Math.log2(n));
  const powerOf2 = 1 << k;         // 2^k
  const l = n - powerOf2;          // l = n - 2^k
  
  // 올바른 공식:
  // - l = 0 (n이 2의 거듭제곱): 답 = n
  // - l > 0: 답 = 2*l
  
  if (l === 0) {
    return n; // n이 2의 거듭제곱인 경우
  } else {
    return 2 * l; // 일반적인 경우
  }
}

// 가장 효율적인 비트 시프트 방법 사용
console.log(josephusBitShift(input));

/* 
성능 비교:
- 기존 시뮬레이션: O(n) 시간, O(n) 공간
- 재귀적 해법: O(log n) 시간, O(log n) 공간 (재귀 스택)
- 비트 연산: O(1) 시간, O(1) 공간

수학적 원리:
이 문제는 카드게임의 특수한 패턴을 이용합니다.
n = 2^k + l (0 ≤ l < 2^k)로 표현할 때:
- l = 0 (n이 2의 거듭제곱): 답 = n
- l > 0: 답 = 2*l

예시:
- n=1: 특별한 경우 → 1 (카드 1장만 있으면 그 카드가 답)
- n=2: 2^1 + 0, l=0 → 답 = 2
- n=3: 2^1 + 1, l=1 → 답 = 2*1 = 2
- n=4: 2^2 + 0, l=0 → 답 = 4  
- n=5: 2^2 + 1, l=1 → 답 = 2*1 = 2
- n=6: 2^2 + 2, l=2 → 답 = 2*2 = 4
- n=8: 2^3 + 0, l=0 → 답 = 8
*/
