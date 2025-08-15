/*
TODO 제목: 요세푸스 문제 0 - 연결 리스트 해법
! 시간복잡도: O(N×K) - K가 작을 때 매우 효율적
! 공간복잡도: O(N)
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const [N, K] = input;
if (K < 1 || K > N || N > 1000) return;

// 노드 클래스 정의
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// 간단하고 정확한 요세푸스 연결 리스트 구현
function solveJosephusLinkedList(n, k) {
    const result = [];
    
    // 연결 리스트 노드들 생성
    const nodes = [];
    for (let i = 1; i <= n; i++) {
        nodes.push(new Node(i));
    }
    
    // 원형 연결 리스트 구성
    for (let i = 0; i < n; i++) {
        nodes[i].next = nodes[(i + 1) % n];
    }
    
    let current = nodes[0]; // 1번 사람부터 시작
    let prev = nodes[n - 1]; // 마지막 사람이 첫 번째 사람의 이전
    
    // N명이 모두 제거될 때까지 반복
    for (let count = 0; count < n; count++) {
        // K-1번 이동 (K번째 사람을 찾기 위해)
        for (let i = 1; i < k; i++) {
            prev = current;
            current = current.next;
        }
        
        // 현재 사람을 제거
        result.push(current.value);
        
        // 연결 리스트에서 노드 제거
        prev.next = current.next;
        
        // 다음 사람으로 이동
        current = current.next;
    }
    
    return result;
}

const result = solveJosephusLinkedList(N, K);
console.log(`<${result.join(", ")}>`);

/*
시간복잡도 분석:
- 외부 루프: N번
- removeKth: K번 이동 → O(K)
- 총 시간복잡도: O(N×K)

K가 작을 때 (K << N): 거의 O(N)에 근사
K가 클 때 (K ≈ N): O(N²)이지만 splice보다 빠름

공간복잡도: O(N) - 연결 리스트 노드들
*/
