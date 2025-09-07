/*
TODO 제목: N과 M (3)
! https://www.acmicpc.net/problem/15651
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const [N, M] = input.map(Number);

// 백트래킹 함수: N개의 수 중 M개를 선택하는 모든 조합 생성
const backtracking = (N, M) => {
  const result = [];        // 현재까지 선택된 수들을 저장
  let answer = "";
  
  const generateCombination = (depth) => {
    // M개를 모두 선택했으면 결과 출력
    if (depth === M) {
      answer += result.join(" ") + "\n";
      return;
    }
    
    // 1부터 N까지의 수를 순회하며 선택
    for (let i = 1; i <= N; i++) {
      // 현재 수를 선택
      result.push(i);
      
      // 다음 단계로 재귀 호출
      generateCombination(depth + 1);
      
      // 백트래킹: 현재 수를 선택 해제
      result.pop();
    }
  };
  
  generateCombination(0);
  console.log(answer.trim());
};

backtracking(N, M);