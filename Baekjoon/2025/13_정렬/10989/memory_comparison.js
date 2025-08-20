/*
TODO 제목: 계수 정렬 vs 일반 배열 메모리 사용량 비교
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
    console.log(`📈 Heap Total (할당된 힙): ${formatMemory(usage.heapTotal)}`);
    return usage;
}

async function testCountingSort() {
    console.log("\n" + "=".repeat(60));
    console.log("🔢 계수 정렬 (Counting Sort) 메모리 테스트");
    console.log("=".repeat(60));
    
    const input = fs.readFileSync("big_input.txt").toString().trim().split("\n");
    const N = parseInt(input[0]);
    
    const startUsage = printMemoryUsage("시작");
    
    // 계수 정렬 방식
    console.log(`\n📊 입력 정보: ${N.toLocaleString()}개의 숫자`);
    const count = new Array(10001).fill(0);
    
    const afterArrayUsage = printMemoryUsage("카운팅 배열 생성 후");
    
    // 카운팅
    const startTime = Date.now();
    for (let i = 1; i <= N; i++) {
        const num = parseInt(input[i]);
        count[num]++;
    }
    const endTime = Date.now();
    
    const finalUsage = printMemoryUsage("카운팅 완료");
    
    console.log(`\n⏱️  실행 시간: ${endTime - startTime}ms`);
    console.log(`💾 추가 메모리 사용량: ${formatMemory(finalUsage.heapUsed - startUsage.heapUsed)}`);
    
    return {
        memoryUsed: finalUsage.heapUsed - startUsage.heapUsed,
        time: endTime - startTime
    };
}

async function testArraySort() {
    console.log("\n" + "=".repeat(60));
    console.log("📋 일반 배열 정렬 메모리 테스트");
    console.log("=".repeat(60));
    
    // 메모리 초기화를 위해 가비지 컬렉션 강제 실행
    if (global.gc) {
        global.gc();
    }
    
    const input = fs.readFileSync("big_input.txt").toString().trim().split("\n");
    const N = parseInt(input[0]);
    
    const startUsage = printMemoryUsage("시작");
    
    // 일반 배열 방식
    console.log(`\n📊 입력 정보: ${N.toLocaleString()}개의 숫자`);
    const numbers = [];
    
    const startTime = Date.now();
    for (let i = 1; i <= N; i++) {
        numbers.push(parseInt(input[i]));
    }
    
    const afterArrayUsage = printMemoryUsage("배열 생성 후");
    
    // 정렬 (메모리 사용량만 확인하고 실제로는 정렬하지 않음)
    // numbers.sort((a, b) => a - b);  // 실행하면 더 많은 메모리 사용
    
    const endTime = Date.now();
    const finalUsage = printMemoryUsage("완료");
    
    console.log(`\n⏱️  실행 시간: ${endTime - startTime}ms`);
    console.log(`💾 추가 메모리 사용량: ${formatMemory(finalUsage.heapUsed - startUsage.heapUsed)}`);
    
    return {
        memoryUsed: finalUsage.heapUsed - startUsage.heapUsed,
        time: endTime - startTime
    };
}

async function main() {
    console.log("🚀 메모리 사용량 비교 테스트 시작");
    
    // 계수 정렬 테스트
    const countingResult = await testCountingSort();
    
    // 잠시 대기 (메모리 정리)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 일반 배열 테스트
    const arrayResult = await testArraySort();
    
    // 결과 비교
    console.log("\n" + "=".repeat(60));
    console.log("📊 최종 비교 결과");
    console.log("=".repeat(60));
    
    console.log(`\n🔢 계수 정렬:`);
    console.log(`   💾 메모리: ${formatMemory(countingResult.memoryUsed)}`);
    console.log(`   ⏱️  시간: ${countingResult.time}ms`);
    
    console.log(`\n📋 일반 배열:`);
    console.log(`   💾 메모리: ${formatMemory(arrayResult.memoryUsed)}`);
    console.log(`   ⏱️  시간: ${arrayResult.time}ms`);
    
    const memoryRatio = arrayResult.memoryUsed / countingResult.memoryUsed;
    const timeRatio = arrayResult.time / countingResult.time;
    
    console.log(`\n🏆 비교 결과:`);
    console.log(`   📉 메모리 절약: ${memoryRatio.toFixed(1)}배 적게 사용`);
    console.log(`   🚀 속도: ${timeRatio > 1 ? timeRatio.toFixed(1) + '배 빠름' : (1/timeRatio).toFixed(1) + '배 느림'}`);
    
    console.log(`\n💡 백준 10989번 (8MB 제한)에서:`);
    if (arrayResult.memoryUsed > 8 * 1024 * 1024) {
        console.log(`   ❌ 일반 배열: 메모리 제한 초과!`);
    } else {
        console.log(`   ✅ 일반 배열: 메모리 제한 통과`);
    }
    
    if (countingResult.memoryUsed > 8 * 1024 * 1024) {
        console.log(`   ❌ 계수 정렬: 메모리 제한 초과!`);
    } else {
        console.log(`   ✅ 계수 정렬: 메모리 제한 통과`);
    }
}

main().catch(console.error);


