/*
TODO 제목: N과 M (1)
! https://www.acmicpc.net/problem/15649
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const [N, M] = input.map(Number);

// 백트래킹 함수: N개의 수 중 M개를 선택하는 모든 순열 생성
const backtracking = (N, M) => {
  const result = [];        // 현재까지 선택된 수들을 저장
  const visited = new Set(); // 이미 사용된 수들을 O(1)로 체크
  
  const generatePermutation = (depth) => {
    // M개를 모두 선택했으면 결과 출력
    if (depth === M) {
      console.log(result.join(" "));
      return;
    }
    
    // 1부터 N까지의 수를 순회하며 선택
    for (let i = 1; i <= N; i++) {
      // 이미 사용된 수는 건너뛰기
      if (visited.has(i)) continue;
      
      // 현재 수를 선택
      visited.add(i);
      result.push(i);
      
      // 다음 단계로 재귀 호출
      generatePermutation(depth + 1);
      
      // 백트래킹: 현재 수를 선택 해제
      result.pop();
      visited.delete(i);
    }
  };
  
  generatePermutation(0);
};

backtracking(N, M);