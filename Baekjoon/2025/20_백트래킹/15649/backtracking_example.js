/*
백트래킹(Backtracking) 동작 과정 이해하기
- N과 M (1) 문제를 기반으로 한 단계별 시각화
- 각 단계에서 어떤 선택을 하고, 어떻게 되돌아가는지 확인
*/

console.log("🔍 백트래킹 동작 과정 이해하기\n");

// 간단한 예제: 1, 2, 3 중에서 2개를 선택하는 순열
const N = 3;  // 사용 가능한 숫자: 1, 2, 3
const M = 2;  // 선택할 개수: 2개

console.log(`📋 문제: ${N}개의 숫자 중 ${M}개를 선택하는 모든 순열 찾기`);
console.log(`🎯 목표: [1,2,3] 중에서 2개를 선택하여 만들 수 있는 모든 순서쌍\n`);

// 백트래킹 함수 (단계별 로깅 포함)
function backtrackingWithLogging() {
    const result = [];           // 현재까지 선택된 숫자들
    const used = new Set();      // 이미 사용된 숫자들
    let stepCount = 0;          // 단계 카운터
    
    function generatePermutation(depth) {
        stepCount++;
        const indent = "  ".repeat(depth);
        
        console.log(`${indent}🔄 단계 ${stepCount}: depth=${depth}, 현재 결과=[${result.join(',')}]`);
        
        // 기저 사례: M개를 모두 선택했으면 결과 출력
        if (depth === M) {
            console.log(`${indent}✅ 완성! 결과: [${result.join(',')}]`);
            console.log(`${indent}   └─ 이 경로는 완성되었습니다.\n`);
            return;
        }
        
        // 1부터 N까지의 숫자를 순회하며 선택
        for (let i = 1; i <= N; i++) {
            console.log(`${indent}🔍 숫자 ${i}를 확인 중...`);
            
            // 이미 사용된 숫자는 건너뛰기
            if (used.has(i)) {
                console.log(`${indent}   ❌ ${i}는 이미 사용됨 → 건너뛰기`);
                continue;
            }
            
            // 현재 숫자를 선택
            console.log(`${indent}   ✅ ${i}를 선택!`);
            used.add(i);
            result.push(i);
            
            console.log(`${indent}   📝 현재 상태: result=[${result.join(',')}], used={${Array.from(used).join(',')}}`);
            console.log(`${indent}   🚀 다음 단계로 재귀 호출...\n`);
            
            // 다음 단계로 재귀 호출
            generatePermutation(depth + 1);
            
            // 백트래킹: 현재 숫자를 선택 해제
            console.log(`${indent}   ↩️  ${i} 선택 해제 (백트래킹)`);
            result.pop();
            used.delete(i);
            console.log(`${indent}   📝 되돌린 상태: result=[${result.join(',')}], used={${Array.from(used).join(',')}}\n`);
        }
        
        console.log(`${indent}🏁 depth ${depth}에서 모든 옵션 탐색 완료\n`);
    }
    
    console.log("🚀 백트래킹 시작!\n");
    generatePermutation(0);
    console.log("🎉 모든 순열 생성 완료!");
}

// 실행
backtrackingWithLogging();

console.log("\n" + "=".repeat(60));
console.log("💡 백트래킹 핵심 개념:");
console.log("1. 선택: 가능한 옵션 중 하나를 선택");
console.log("2. 탐색: 선택한 상태에서 다음 단계로 진행");
console.log("3. 되돌리기: 더 이상 진행할 수 없으면 이전 선택을 취소");
console.log("4. 반복: 모든 가능한 조합을 시도할 때까지 1-3 반복");
console.log("=".repeat(60));
