// 연결 리스트로 스택 구현

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedStack {
  constructor() {
    this.top = null;  // 스택의 최상단
    this.size = 0;
  }

  // 삽입 (push) - O(1)
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;  // 새 노드가 현재 top을 가리킴
    this.top = newNode;       // top을 새 노드로 갱신
    this.size++;
    console.log(`Push ${value}: [${this.toArray().join(' -> ')}]`);
  }

  // 삭제 (pop) - O(1)
  pop() {
    if (this.size === 0) {
      console.log("스택이 비어있습니다");
      return null;
    }
    
    const value = this.top.value;
    this.top = this.top.next;  // top을 다음 노드로 이동
    this.size--;
    console.log(`Pop ${value}: [${this.toArray().join(' -> ')}]`);
    return value;
  }

  // 최상단 확인 (peek) - O(1)
  peek() {
    return this.size > 0 ? this.top.value : null;
  }

  // 비어있는지 확인
  isEmpty() {
    return this.size === 0;
  }

  // 배열로 변환 (시각화용)
  toArray() {
    if (this.size === 0) return ['empty'];
    
    const result = [];
    let current = this.top;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  // 스택 상태 출력
  display() {
    console.log(`스택 크기: ${this.size}`);
    console.log(`스택 내용: ${this.toArray().join(' -> ')}`);
    if (this.size > 0) {
      console.log(`Top: ${this.peek()}`);
    }
    console.log("-".repeat(30));
  }
}

// 스택 데모
console.log("📚 연결 리스트로 구현한 스택\n");

const stack = new LinkedStack();
stack.display();

console.log("🔸 요소들 추가:");
stack.push(1);
stack.push(2);
stack.push(3);

console.log(`\n🔸 최상단 확인: ${stack.peek()}`);

console.log("\n🔸 요소들 제거:");
stack.pop();
stack.pop();

console.log("\n🔸 다시 추가:");
stack.push(4);

console.log("\n🔸 모든 요소 제거:");
while (!stack.isEmpty()) {
  stack.pop();
}

console.log("\n🔸 빈 스택에서 pop 시도:");
stack.pop();

// 실제 활용 예제: 괄호 매칭
console.log("\n" + "=".repeat(40));
console.log("🔸 실제 활용 예제: 괄호 매칭");

function isValidParentheses(str) {
  const stack = new LinkedStack();
  const pairs = { '(': ')', '[': ']', '{': '}' };
  
  for (let char of str) {
    if (char in pairs) {
      // 여는 괄호
      stack.push(char);
    } else if (Object.values(pairs).includes(char)) {
      // 닫는 괄호
      if (stack.isEmpty()) return false;
      const last = stack.pop();
      if (pairs[last] !== char) return false;
    }
  }
  
  return stack.isEmpty();
}

const testCases = [
  "()",
  "()[]{}",
  "([{}])",
  "([)]",
  "((("
];

testCases.forEach(test => {
  console.log(`"${test}" → ${isValidParentheses(test) ? '✅ 유효' : '❌ 무효'}`);
});
