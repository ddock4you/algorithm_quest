/*
TODO 제목: 수 정렬하기 3 - 메모리 사용량 모니터링
! https://www.acmicpc.net/problem/10989
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 메모리 사용량을 MB 단위로 변환하는 함수
function formatMemory(bytes) {
    return (bytes / 1024 / 1024).toFixed(2) + ' MB';
}

// 메모리 사용량 출력 함수
function printMemoryUsage(label) {
    const usage = process.memoryUsage();
    console.log(`\n=== ${label} ===`);
    console.log(`RSS (Resident Set Size): ${formatMemory(usage.rss)}`);
    console.log(`Heap Used: ${formatMemory(usage.heapUsed)}`);
    console.log(`Heap Total: ${formatMemory(usage.heapTotal)}`);
    console.log(`External: ${formatMemory(usage.external)}`);
    console.log(`Array Buffers: ${formatMemory(usage.arrayBuffers)}`);
}

console.log("🚀 계수 정렬 메모리 사용량 모니터링 시작");

// 시작 전 메모리 사용량
printMemoryUsage("프로그램 시작");

const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = parseInt(input[0]);

// 입력 읽기 후 메모리 사용량
printMemoryUsage("입력 읽기 완료");

console.log(`\n📊 입력 정보:`);
console.log(`- 입력 개수: ${N.toLocaleString()}개`);
console.log(`- 예상 메모리 (일반 배열): ${formatMemory(N * 8)} (64비트 정수 기준)`);
console.log(`- 계수 정렬 배열 크기: ${formatMemory(10001 * 8)}`);

// 계수 정렬 시작
console.log(`\n⏱️  계수 정렬 시작...`);
const startTime = Date.now();

// 카운팅 배열 생성
const count = new Array(10001).fill(0);

// 카운팅 배열 생성 후 메모리 사용량
printMemoryUsage("카운팅 배열 생성 후");

// 각 숫자의 개수를 카운팅
for (let i = 1; i <= N; i++) {
    const num = parseInt(input[i]);
    count[num]++;
}

// 카운팅 완료 후 메모리 사용량
printMemoryUsage("카운팅 완료 후");

// 결과 출력 (메모리 절약을 위해 스트림 방식)
let result = "";
for (let i = 1; i <= 10000; i++) {
    if (count[i] > 0) {
        result += (i + "\n").repeat(count[i]);
    }
}

// 결과 생성 후 메모리 사용량
printMemoryUsage("결과 생성 후");

const endTime = Date.now();
const executionTime = endTime - startTime;

console.log(`\n✅ 실행 완료!`);
console.log(`⏱️  실행 시간: ${executionTime}ms`);

// 최종 메모리 사용량
printMemoryUsage("실행 완료");

// 실제 결과 출력 (모니터링 정보와 구분)
console.log("\n" + "=".repeat(50));
console.log("📋 정렬 결과:");
console.log("=".repeat(50));
console.log(result.trim());


