/*
하노이 탑 문제 - 단계별 상세 설명
백준 11729번: 하노이 탑 이동 순서

문제: 3개의 기둥(1, 2, 3)이 있고, 기둥 1에 n개의 원판이 크기 순서대로 쌓여있다.
원판을 기둥 3으로 모두 옮기는데, 다음 규칙을 지켜야 한다:
1. 한 번에 하나의 원판만 이동
2. 큰 원판은 작은 원판 위에 놓을 수 없음
3. 기둥 2를 보조 기둥으로 사용 가능

해결 방법: 재귀(Recursion)를 사용한 분할 정복(Divide and Conquer)
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

console.log("=== 하노이 탑 문제 해결 과정 ===\n");

let moveCount = 0;
const moves = [];

/**
 * 하노이 탑을 해결하는 재귀 함수
 * @param {number} n - 옮길 원판의 개수
 * @param {number} from - 출발 기둥 번호
 * @param {number} to - 도착 기둥 번호
 * @param {number} aux - 보조 기둥 번호
 */
function solveHanoi(n, from, to, aux) {
  console.log(
    `\n🔍 n=${n}개 원판을 ${from}번 기둥에서 ${to}번 기둥으로 이동 (보조: ${aux}번)`
  );

  // 🎯 기본 케이스 (Base Case): 원판이 1개일 때
  if (n === 1) {
    console.log(`  ✅ 원판 1개: ${from} → ${to} (직접 이동)`);
    moves.push(`${from} ${to}`);
    moveCount++;
    return;
  }

  // 🔄 재귀 케이스 (Recursive Case): 원판이 2개 이상일 때
  console.log(`  📋 ${n}개 원판을 옮기는 3단계:`);

  // 1단계: 위의 n-1개 원판을 보조 기둥으로 이동
  console.log(`    1️⃣ 위의 ${n - 1}개 원판을 ${from} → ${aux} (보조 기둥으로)`);
  solveHanoi(n - 1, from, aux, to);

  // 2단계: 가장 큰 원판을 목적지로 이동
  console.log(`    2️⃣ 가장 큰 원판 ${n}을 ${from} → ${to} (목적지로)`);
  moves.push(`${from} ${to}`);
  moveCount++;

  // 3단계: 보조 기둥의 n-1개 원판을 목적지로 이동
  console.log(`    3️⃣ 보조 기둥의 ${n - 1}개 원판을 ${aux} → ${to} (목적지로)`);
  solveHanoi(n - 1, aux, to, from);
}

console.log(`📊 입력: ${input}개의 원판`);
console.log(`🎯 목표: 기둥 1에서 기둥 3으로 모든 원판 이동`);
console.log(`🔄 보조 기둥: 기둥 2`);

// 🚀 하노이 탑 해결 시작
solveHanoi(input, 1, 3, 2);

console.log(`\n🎉 완료! 총 ${moveCount}번 이동했습니다.`);
console.log(`\n📝 이동 순서:`);
console.log(moves.join("\n"));

// 백준 제출용 출력
console.log(`\n=== 백준 제출용 ===`);
console.log(moveCount);
console.log(moves.join("\n"));
