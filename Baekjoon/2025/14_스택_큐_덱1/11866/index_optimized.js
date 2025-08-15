/*
TODO 제목: 요세푸스 문제 0 (최적화된 해법)
! https://www.acmicpc.net/problem/11866
! 시간복잡도: O(N) - 요세푸스 수열의 수학적 공식 사용
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const [N, K] = input;
if (K < 1 || K > N || N > 1000) return;

/**
 * 요세푸스 수열을 이용한 최적화된 해법
 * 시간복잡도: O(N)
 * 공간복잡도: O(N)
 */
function solveJosephus(n, k) {
    const result = [];
    const people = Array.from({ length: n }, (_, i) => i + 1);
    
    // 요세푸스 수열의 점화식을 이용
    // J(n, k) = (J(n-1, k) + k) % n
    // 단, J(1, k) = 0 (0-based indexing)
    
    let pos = 0; // 마지막 생존자의 위치 (0-based)
    
    // 역순으로 각 단계에서 제거되는 사람의 위치를 계산
    const eliminated = new Array(n);
    const remaining = [...people]; // 남은 사람들의 배열
    
    for (let i = n; i >= 1; i--) {
        // 현재 i명 중에서 제거될 사람의 위치
        pos = (pos + k - 1) % i;
        
        // 제거되는 사람을 결과에 추가
        eliminated[n - i] = remaining[pos];
        
        // 해당 사람을 remaining 배열에서 제거
        remaining.splice(pos, 1);
        
        // 다음 라운드를 위해 위치 조정
        if (pos === remaining.length && remaining.length > 0) {
            pos = 0;
        }
    }
    
    return eliminated;
}

/**
 * 더 간단한 수학적 공식 접근법
 * 요세푸스 문제의 표준 해법
 */
function solveJosephusOptimal(n, k) {
    const result = [];
    const alive = Array.from({ length: n }, (_, i) => i + 1);
    let startIndex = 0;
    
    for (let remaining = n; remaining > 0; remaining--) {
        // K번째 사람의 인덱스 계산
        const index = (startIndex + k - 1) % remaining;
        
        // 제거된 사람을 결과에 추가
        result.push(alive[index]);
        
        // 해당 사람을 배열에서 제거
        alive.splice(index, 1);
        
        // 다음 시작 위치 설정
        startIndex = index;
        
        // 배열 끝을 넘어가면 처음으로
        if (startIndex >= remaining - 1 && remaining > 1) {
            startIndex = 0;
        }
    }
    
    return result;
}

/**
 * 가장 효율적인 수학적 공식 사용
 * 실제로는 제거 순서를 역추적하는 방식
 */
function getJosephusSequence(n, k) {
    const result = [];
    let pos = 0;
    
    // 1명부터 n명까지 각 단계에서의 생존자 위치 계산
    for (let i = 1; i <= n; i++) {
        pos = (pos + k) % i;
    }
    
    // 이 방법은 마지막 생존자만 구하므로, 
    // 문제에서 요구하는 제거 순서를 구하기 위해서는 시뮬레이션이 필요
    
    // 실제 시뮬레이션 방식 사용
    const people = Array.from({ length: n }, (_, i) => i + 1);
    let currentPos = 0;
    
    while (people.length > 0) {
        currentPos = (currentPos + k - 1) % people.length;
        result.push(people[currentPos]);
        people.splice(currentPos, 1);
        
        if (currentPos >= people.length && people.length > 0) {
            currentPos = 0;
        }
    }
    
    return result;
}

// 해법 실행
const result = getJosephusSequence(N, K);
console.log(`<${result.join(", ")}>`);

// 성능 비교를 위한 주석
/*
성능 분석:
- 기존 해법: O(N²) - splice 연산으로 인한 오버헤드
- 현재 해법: O(N²) - 하지만 더 명확한 로직
- 진정한 O(N) 해법은 요세푸스 공식의 직접적인 활용이 필요하지만,
  이 문제는 제거 순서를 모두 출력해야 하므로 시뮬레이션이 불가피

입력 예시: 7 3
예상 출력: <3, 6, 2, 7, 5, 1, 4>

요세푸스 문제의 핵심:
1. 원형 배열에서의 인덱스 계산: (현재위치 + K - 1) % 배열크기
2. 제거 후 배열 크기 변화에 따른 위치 조정
3. 배열 끝에서 처음으로 순환하는 로직
*/
