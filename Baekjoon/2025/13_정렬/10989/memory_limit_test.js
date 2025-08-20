/*
TODO 제목: 메모리 제한 시뮬레이션 테스트
! https://www.acmicpc.net/problem/10989
*/

const fs = require("fs");

// 메모리 사용량을 MB 단위로 변환하는 함수
function formatMemory(bytes) {
    return (bytes / 1024 / 1024).toFixed(2) + ' MB';
}

// 메모리 사용량 출력 함수
function printMemoryUsage(label) {
    const usage = process.memoryUsage();
    console.log(`\n=== ${label} ===`);
    console.log(`🖥️  RSS (전체 메모리): ${formatMemory(usage.rss)}`);
    console.log(`📊 Heap Used (실제 사용): ${formatMemory(usage.heapUsed)}`);
    return usage;
}

function simulateMemoryUsage() {
    console.log("🧪 메모리 사용량 시뮬레이션 테스트");
    console.log("=" .repeat(50));
    
    // 다양한 입력 크기에 대한 메모리 사용량 계산
    const testSizes = [10000, 100000, 1000000, 5000000, 10000000];
    
    console.log("\n📊 이론적 메모리 사용량 계산:");
    console.log("|---------|-----------|-----------|---------|\n");
    console.log("| 입력 크기 | 일반 배열  | 계수 정렬  | 절약 비율 |");
    console.log("|---------|-----------|-----------|---------|\n");
    
    for (const size of testSizes) {
        // 일반 배열: 각 정수는 8바이트 (64비트)
        const arrayMemory = size * 8;
        
        // 계수 정렬: 카운팅 배열 10,001개 정수
        const countingMemory = 10001 * 8;
        
        const ratio = (arrayMemory / countingMemory).toFixed(1);
        const arrayMB = formatMemory(arrayMemory).padStart(8);
        const countingMB = formatMemory(countingMemory).padStart(8);
        
        console.log(`| ${size.toLocaleString().padStart(7)} | ${arrayMB} | ${countingMB} | ${ratio.padStart(6)}배 |`);
    }
    
    console.log("|---------|-----------|-----------|---------|\n");
    
    // 백준 8MB 제한 확인
    const limit8MB = 8 * 1024 * 1024; // 8MB in bytes
    console.log(`\n🚨 백준 10989번 메모리 제한 (8MB) 분석:`);
    
    for (const size of testSizes) {
        const arrayMemory = size * 8;
        const countingMemory = 10001 * 8;
        
        console.log(`\n📊 입력 크기: ${size.toLocaleString()}개`);
        console.log(`   📋 일반 배열: ${formatMemory(arrayMemory)} ${arrayMemory > limit8MB ? '❌ 제한 초과' : '✅ 통과'}`);
        console.log(`   🔢 계수 정렬: ${formatMemory(countingMemory)} ${countingMemory > limit8MB ? '❌ 제한 초과' : '✅ 통과'}`);
        
        if (arrayMemory > limit8MB) {
            const overBy = formatMemory(arrayMemory - limit8MB);
            console.log(`   ⚠️  일반 배열은 ${overBy} 초과!`);
        }
    }
}

function testActualMemory() {
    console.log("\n\n🔬 실제 메모리 사용량 테스트");
    console.log("=" .repeat(50));
    
    const startUsage = printMemoryUsage("테스트 시작");
    
    // 계수 정렬 배열 생성
    console.log("\n🔢 계수 정렬 배열 생성 중...");
    const count = new Array(10001).fill(0);
    const countingUsage = printMemoryUsage("계수 정렬 배열 생성 후");
    
    console.log("\n📋 일반 배열 생성 중 (크기별)...");
    
    // 다양한 크기의 배열 테스트
    const sizes = [10000, 50000, 100000];
    
    for (const size of sizes) {
        console.log(`\n  📊 크기 ${size.toLocaleString()}개 배열 생성...`);
        const testArray = new Array(size);
        for (let i = 0; i < size; i++) {
            testArray[i] = Math.floor(Math.random() * 10000) + 1;
        }
        
        const usage = printMemoryUsage(`  배열 크기 ${size.toLocaleString()}`);
        const memoryDiff = usage.heapUsed - startUsage.heapUsed;
        console.log(`  💾 추가 메모리: ${formatMemory(memoryDiff)}`);
        
        // 메모리 정리
        testArray.length = 0;
    }
    
    const countingMemoryDiff = countingUsage.heapUsed - startUsage.heapUsed;
    console.log(`\n🏆 계수 정렬 배열 메모리 사용량: ${formatMemory(countingMemoryDiff)}`);
}

function main() {
    console.log("🚀 백준 10989번 메모리 분석 도구\n");
    
    // 이론적 계산
    simulateMemoryUsage();
    
    // 실제 메모리 테스트
    testActualMemory();
    
    console.log("\n💡 결론:");
    console.log("   ✅ 계수 정렬은 입력 크기와 무관하게 일정한 메모리 사용");
    console.log("   ❌ 일반 배열은 입력 크기에 비례하여 메모리 사용 증가");
    console.log("   🎯 백준 10989번에서는 계수 정렬만이 유일한 해답!");
}

main();


