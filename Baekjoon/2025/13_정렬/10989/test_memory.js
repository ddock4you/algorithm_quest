// Node.js 메모리 사용량 측정
console.log("=== Node.js 메모리 분석 ===");

function formatMB(bytes) {
    return (bytes / 1024 / 1024).toFixed(2) + ' MB';
}

console.log("1. 기본 런타임:", formatMB(process.memoryUsage().rss));

// 계수 정렬 배열 생성
const count = new Array(10001).fill(0);
console.log("2. 계수 배열 생성 후:", formatMB(process.memoryUsage().rss));

// 모듈 로딩 테스트
const fs = require('fs');
console.log("3. fs 모듈 로딩 후:", formatMB(process.memoryUsage().rss));

const readline = require('readline');
console.log("4. readline 모듈 로딩 후:", formatMB(process.memoryUsage().rss));

console.log("\n=== 상세 메모리 분석 ===");
const usage = process.memoryUsage();
console.log("RSS (전체):", formatMB(usage.rss));
console.log("Heap Total:", formatMB(usage.heapTotal));
console.log("Heap Used:", formatMB(usage.heapUsed));
console.log("External:", formatMB(usage.external));
console.log("Array Buffers:", formatMB(usage.arrayBuffers));

console.log("\n=== 계수 배열 정보 ===");
console.log("배열 길이:", count.length);
console.log("예상 크기:", count.length * 8, "bytes (", (count.length * 8 / 1024).toFixed(2), "KB)");
