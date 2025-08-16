/*
TODO 제목: queuestack - 직관적인 시뮬레이션 방법
! https://www.acmicpc.net/problem/24511
* 풀이: 각 자료구조의 특성을 그대로 반영하여 시뮬레이션
* 시간 복잡도: O(N*M) - 각 새로운 값마다 모든 자료구조를 순회하며 큐의 shift 연산이 포함될 경우 O(N)
* 공간 복잡도: O(N+M)
* 목적: 문제의 동작 원리를 시각적으로 이해하는 데 중점
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number); // 자료구조 타입 (0:큐, 1:스택)
const B = input[2].split(" ").map(Number); // 각 자료구조 초기 원소
const M = Number(input[3]);
const C = input[4].split(" ").map(Number); // 삽입할 수열

// 큐와 스택 클래스 정의 (Array 기반 구현)
class Queue {
  constructor(initialValue) {
    this.items = [initialValue];
    this.type = 'Queue';
  }

  // 큐에 요소 추가
  enqueue(value) {
    this.items.push(value);
  }

  // 큐에서 요소 제거
  dequeue() {
    if (this.items.length === 0) return undefined;
    return this.items.shift(); // 배열의 shift는 O(N) -> 이 때문에 느려짐
  }

  // 큐가 비어있는지 확인
  isEmpty() {
    return this.items.length === 0;
  }

  // 큐 크기 반환
  getSize() {
    return this.items.length;
  }
}

class Stack {
  constructor(initialValue) {
    this.items = [initialValue];
    this.type = 'Stack';
  }

  // 스택에 요소 추가
  push(value) {
    this.items.push(value);
  }

  // 스택에서 요소 제거
  pop() {
    if (this.items.length === 0) return undefined;
    return this.items.pop(); // 배열의 pop은 O(1)
  }

  // 스택이 비어있는지 확인
  isEmpty() {
    return this.items.length === 0;
  }

  // 스택 크기 반환
  getSize() {
    return this.items.length;
  }
}

// 자료구조들을 배열로 생성하고 초기값 설정
const dataStructures = [];
for (let i = 0; i < N; i++) {
  if (A[i] === 0) {
    dataStructures.push(new Queue(B[i]));
  } else {
    dataStructures.push(new Stack(B[i]));
  }
}

console.log("🔧 초기 자료구조 상태:");
dataStructures.forEach((ds, index) => {
  console.log(`${index + 1}번 ${ds.type}: [${ds.items.join(", ")}] (초기값: ${B[index]})`);
});
console.log("\n" + "=".repeat(60));

const finalOutput = []; // 최종적으로 출력될 숫자들을 저장할 배열

// M개의 새로운 값을 순서대로 처리
for (let i = 0; i < M; i++) {
  const incomingValue = C[i]; // 현재 처리할 새로운 숫자
  console.log(`\n🎯 ${i + 1}번째 새로운 값 처리 시작: ${incomingValue}`);
  
  let valueToPropagate = incomingValue; // 다음 자료구조로 전달될 값
  
  // 각 자료구조를 순서대로 순회하며 시뮬레이션
  for (let j = 0; j < N; j++) {
    const currentDS = dataStructures[j];
    
    console.log(`  🔗 ${j + 1}번 ${currentDS.type}에 ${valueToPropagate} 삽입 시도...`);

    if (currentDS.type === 'Queue') {
      // 큐에 값을 넣으면 기존의 맨 앞 값이 나옴 (FIFO)
      currentDS.enqueue(valueToPropagate);
      const dequeuedValue = currentDS.dequeue();
      // console.log(`    📥 큐에 ${incomingValue} 삽입, 📤 ${dequeuedValue} 제거됨`); // 이전 코드
      console.log(`    📥 큐에 ${valueToPropagate} 삽입, 📤 ${dequeuedValue} 제거됨`); // 수정된 코드
      valueToPropagate = dequeuedValue; // 다음 자료구조로 전달될 값
    } else { // Stack
      // 스택에 값을 넣으면 방금 넣은 값이 나옴 (LIFO)
      currentDS.push(valueToPropagate);
      const poppedValue = currentDS.pop();
      // console.log(`    📥 스택에 ${incomingValue} 삽입, 📤 ${poppedValue} 즉시 제거됨`); // 이전 코드
      console.log(`    📥 스택에 ${valueToPropagate} 삽입, 📤 ${poppedValue} 즉시 제거됨`); // 수정된 코드
      valueToPropagate = poppedValue; // 다음 자료구조로 전달될 값 (항상 삽입된 값)
    }
    console.log(`    현재 ${j + 1}번 ${currentDS.type} 상태: [${currentDS.items.join(", ")}]`);
  }
  
  // 마지막 자료구조에서 나온 값이 최종 결과에 추가
  finalOutput.push(valueToPropagate);
  console.log(`  ✅ 최종 결과에 ${valueToPropagate} 추가됨`);
}

console.log("\n" + "=".repeat(60));
console.log("🏆 최종 출력 결과:");
console.log(finalOutput.join(" "));

console.log("\n📊 모든 자료구조의 최종 상태:");
dataStructures.forEach((ds, index) => {
  console.log(`${index + 1}번 ${ds.type}: [${ds.items.join(", ")}]`);
});
