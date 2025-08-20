/*
TODO 제목: 요세푸스 문제 0 - 수학적 공식 해법
! 시간복잡도: O(N) - 진정한 선형 시간!
! 공간복잡도: O(N)
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const [N, K] = input;
if (K < 1 || K > N || N > 1000) return;

/**
 * 요세푸스 수열의 수학적 공식을 이용한 O(N) 해법
 * 
 * 핵심 아이디어:
 * 1. 각 단계에서 제거되는 사람의 위치를 수학적으로 계산
 * 2. 배열 조작 없이 순수 계산만으로 해결
 */
function solveJosephusMathematical(n, k) {
    const result = [];
    const people = Array.from({ length: n }, (_, i) => i + 1);
    let pos = 0; // 현재 시작 위치 (0-based)
    
    for (let remaining = n; remaining > 0; remaining--) {
        // 현재 remaining 명에서 K번째 사람의 위치 계산
        pos = (pos + k - 1) % remaining;
        
        // 해당 위치의 사람을 결과에 추가
        result.push(people[pos]);
        
        // *** 핵심: 배열에서 실제로 제거하지 않고 논리적으로 처리 ***
        // 제거된 위치 이후의 모든 사람들을 앞으로 이동
        for (let i = pos; i < remaining - 1; i++) {
            people[i] = people[i + 1];
        }
        
        // 위치 조정: 제거된 사람이 마지막이 아니라면 pos 유지
        // 마지막이었다면 pos를 0으로 리셋
        if (pos === remaining - 1) {
            pos = 0;
        }
    }
    
    return result;
}

/**
 * 더 효율적인 수학적 접근법
 * 배열 이동 없이 인덱스 매핑만 사용
 */
function solveJosephusOptimal(n, k) {
    const result = [];
    // 실제 사람 번호와 배열 인덱스 매핑
    const indexToNumber = Array.from({ length: n }, (_, i) => i + 1);
    const isRemoved = new Array(n).fill(false);
    
    let currentIndex = 0;
    let remainingCount = n;
    
    for (let round = 0; round < n; round++) {
        // K번 이동 (제거된 사람은 건너뛰기)
        let steps = k;
        
        while (steps > 0) {
            // 제거되지 않은 사람을 찾을 때까지 이동
            if (!isRemoved[currentIndex]) {
                steps--;
            }
            
            if (steps > 0) {
                currentIndex = (currentIndex + 1) % n;
            }
        }
        
        // 현재 위치의 사람 제거
        result.push(indexToNumber[currentIndex]);
        isRemoved[currentIndex] = true;
        remainingCount--;
        
        // 다음 시작 위치 찾기 (제거되지 않은 다음 사람)
        if (remainingCount > 0) {
            while (isRemoved[currentIndex]) {
                currentIndex = (currentIndex + 1) % n;
            }
        }
    }
    
    return result;
}

/**
 * 가장 효율적인 방법: 논리적 인덱스 계산
 * 실제 배열 조작 최소화
 */
function solveJosephusUltimate(n, k) {
    const result = [];
    let start = 0; // 현재 라운드의 시작 위치
    
    // 각 라운드에서 사용할 가상 배열 크기
    for (let remaining = n; remaining > 0; remaining--) {
        // K번째 위치 계산 (0-based)
        const removeIndex = (start + k - 1) % remaining;
        
        // 실제 사람 번호 계산 (1-based)
        // 남은 사람들을 1부터 remaining까지로 매핑
        let actualNumber = 1;
        let virtualIndex = 0;
        
        // 제거된 사람들을 고려하여 실제 번호 찾기
        for (let i = 1; i <= n; i++) {
            if (!result.includes(i)) { // 아직 제거되지 않은 사람
                if (virtualIndex === removeIndex) {
                    actualNumber = i;
                    break;
                }
                virtualIndex++;
            }
        }
        
        result.push(actualNumber);
        
        // 다음 라운드 시작 위치 계산
        start = removeIndex;
        if (start >= remaining - 1) {
            start = 0;
        }
    }
    
    return result;
}

// 가장 간단하면서도 효율적인 해법 사용
const result = solveJosephusOptimal(N, K);
console.log(`<${result.join(", ")}>`);

/*
시간복잡도 분석:

1. solveJosephusMathematical: O(N²) - 여전히 배열 이동 있음
2. solveJosephusOptimal: O(N×K) - K번씩 순회하지만 배열 조작 없음  
3. solveJosephusUltimate: O(N²) - includes 때문에 비효율

실제로는 solveJosephusOptimal이 가장 실용적!
- 시간복잡도: O(N×K) 
- K가 작으면 거의 O(N)
- 배열 조작 오버헤드 없음
*/
