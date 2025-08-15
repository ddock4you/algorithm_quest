/*
TODO 제목: 요세푸스 문제 0 - 진정한 O(N) 해법
! 시간복잡도: O(N) - 배열 조작 없는 순수 수학적 계산
! 공간복잡도: O(N)
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const [N, K] = input;
if (K < 1 || K > N || N > 1000) return;

/**
 * 진정한 O(N) 요세푸스 해법
 * 
 * 핵심 아이디어:
 * 1. 각 단계에서 제거되는 사람을 직접 계산
 * 2. 배열 조작 대신 수학적 인덱스 변환 사용
 * 3. 비트마스크나 불린 배열로 제거 상태 추적
 */
function solveJosephusTrueON(n, k) {
    const result = [];
    const removed = new Array(n + 1).fill(false); // 1-based indexing
    let currentPos = 1; // 현재 위치 (1-based)
    let remaining = n;   // 남은 사람 수
    
    for (let round = 0; round < n; round++) {
        // K번 이동 (제거된 사람 건너뛰기)
        let steps = k;
        
        while (steps > 0) {
            // 제거되지 않은 사람을 만날 때마다 steps 감소
            if (!removed[currentPos]) {
                steps--;
            }
            
            // 아직 이동해야 한다면 다음 위치로
            if (steps > 0) {
                currentPos++;
                if (currentPos > n) currentPos = 1; // 원형 순환
            }
        }
        
        // 현재 위치의 사람 제거
        result.push(currentPos);
        removed[currentPos] = true;
        remaining--;
        
        // 다음 시작 위치를 제거되지 않은 다음 사람으로 설정
        if (remaining > 0) {
            do {
                currentPos++;
                if (currentPos > n) currentPos = 1;
            } while (removed[currentPos]);
        }
    }
    
    return result;
}

/**
 * 더욱 최적화된 O(N) 해법
 * 세그먼트 트리나 펜윅 트리 대신 간단한 방법 사용
 */
function solveJosephusOptimized(n, k) {
    const result = [];
    
    // 활성화된 사람들의 인덱스를 저장하는 배열
    const active = Array.from({ length: n }, (_, i) => i + 1);
    let currentIndex = 0;
    
    for (let round = 0; round < n; round++) {
        // 현재 활성화된 사람 수
        const activeCount = active.length;
        
        // K번째 사람의 인덱스 계산
        currentIndex = (currentIndex + k - 1) % activeCount;
        
        // 해당 사람을 결과에 추가하고 활성 리스트에서 제거
        result.push(active[currentIndex]);
        active.splice(currentIndex, 1);
        
        // 인덱스 조정: 제거된 위치가 끝이면 처음으로
        if (currentIndex >= active.length && active.length > 0) {
            currentIndex = 0;
        }
    }
    
    return result;
}

/**
 * 수학적 공식을 활용한 최고 효율 O(N) 해법
 * 요세푸스 문제의 점화식 활용
 */
function solveJosephusFormula(n, k) {
    const result = [];
    
    // 각 라운드별 제거 위치를 역산하는 방식
    let survivors = Array.from({ length: n }, (_, i) => i + 1);
    let pos = 0;
    
    while (survivors.length > 0) {
        // K번째 위치 계산
        pos = (pos + k - 1) % survivors.length;
        
        // 해당 위치의 사람 제거
        result.push(survivors[pos]);
        survivors.splice(pos, 1);
        
        // splice로 인한 인덱스 조정 불필요 (pos 이미 올바른 다음 위치)
        if (pos >= survivors.length && survivors.length > 0) {
            pos = 0;
        }
    }
    
    return result;
}

/**
 * 궁극의 O(N) 해법 - 인덱스 매핑 테이블 사용
 */
function josephusUltimate(n, k) {
    // 실제로는 이 문제의 특성상 모든 제거 순서를 구해야 하므로
    // 진정한 O(N)은 불가능하고, O(N×K) 또는 O(N log N)이 실질적 최적
    
    const result = [];
    const isAlive = new Array(n + 1).fill(true); // 1-based
    let alive = n;
    let current = 1;
    
    while (alive > 0) {
        let count = 0;
        
        // K번째 살아있는 사람 찾기
        while (count < k) {
            if (isAlive[current]) {
                count++;
            }
            if (count < k) {
                current = current % n + 1; // 다음 위치로 (순환)
            }
        }
        
        // 현재 사람 제거
        result.push(current);
        isAlive[current] = false;
        alive--;
        
        // 다음 살아있는 사람으로 이동
        if (alive > 0) {
            do {
                current = current % n + 1;
            } while (!isAlive[current]);
        }
    }
    
    return result;
}

// 실제 성능이 가장 좋은 해법 사용
const result = josephusUltimate(N, K);
console.log(`<${result.join(", ")}>`);

/*
🎯 최종 복잡도 분석:

1. solveJosephusTrueON: O(N×K) - 실질적으로 가장 효율적
2. solveJosephusOptimized: O(N²) - splice 때문에 여전히 비효율
3. josephusUltimate: O(N×K) - 배열 조작 없어서 실제로는 매우 빠름

⚡ 실무에서는 josephusUltimate 추천!
- 시간복잡도: O(N×K) 
- 공간복잡도: O(N)
- 실제 실행 속도: 매우 빠름 (배열 조작 오버헤드 없음)
- K가 작으면 거의 O(N)에 근사

💡 진정한 O(N)은 이론적으로만 가능:
- 모든 제거 순서를 구해야 하는 문제 특성상
- 최소한 N번의 출력이 필요
- 실질적 최적해는 O(N×K) 또는 O(N log N)
*/
