// 배열 vs 연결 리스트 성능 비교

class LinkedListQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = { value, next: null };
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) return null;
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    if (this.size === 0) this.tail = null;
    return value;
  }

  isEmpty() {
    return this.size === 0;
  }
}

class ArrayQueue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    return this.items.shift(); // O(n) 연산!
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// 성능 테스트 함수
function performanceTest(name, testFunc, iterations = 1) {
  console.log(`\n⏱️  ${name}`);
  console.log("-".repeat(50));
  
  const times = [];
  
  for (let i = 0; i < iterations; i++) {
    const start = performance.now();
    testFunc();
    const end = performance.now();
    times.push(end - start);
  }
  
  const avgTime = times.reduce((a, b) => a + b, 0) / times.length;
  console.log(`평균 실행 시간: ${avgTime.toFixed(2)}ms`);
  
  if (iterations > 1) {
    const minTime = Math.min(...times);
    const maxTime = Math.max(...times);
    console.log(`최소: ${minTime.toFixed(2)}ms, 최대: ${maxTime.toFixed(2)}ms`);
  }
  
  return avgTime;
}

// 메모리 사용량 측정 (근사치)
function getMemoryUsage() {
  if (typeof process !== 'undefined' && process.memoryUsage) {
    return process.memoryUsage().heapUsed / 1024 / 1024; // MB
  }
  return null;
}

console.log("🚀 배열 vs 연결 리스트 성능 비교");
console.log("=".repeat(60));

const testSizes = [1000, 5000, 10000];

testSizes.forEach(N => {
  console.log(`\n📊 테스트 크기: ${N.toLocaleString()}개 요소`);
  console.log("=".repeat(40));

  // 1. 큐 연산 성능 비교
  const arrayTime = performanceTest(`배열 큐 (N=${N})`, () => {
    const queue = new ArrayQueue();
    for (let i = 0; i < N; i++) {
      queue.enqueue(i);
    }
    for (let i = 0; i < N; i++) {
      queue.dequeue(); // O(n) 연산!
    }
  });

  const linkedTime = performanceTest(`연결 리스트 큐 (N=${N})`, () => {
    const queue = new LinkedListQueue();
    for (let i = 0; i < N; i++) {
      queue.enqueue(i);
    }
    for (let i = 0; i < N; i++) {
      queue.dequeue(); // O(1) 연산!
    }
  });

  const speedup = arrayTime / linkedTime;
  console.log(`🏆 연결 리스트가 ${speedup.toFixed(1)}배 빠름\n`);
});

// 2. 다양한 연산 비교
console.log("📈 다양한 연산별 성능 비교");
console.log("=".repeat(40));

const N = 10000;

// 앞에 삽입
performanceTest("배열 - 앞에 삽입", () => {
  const arr = [];
  for (let i = 0; i < N; i++) {
    arr.unshift(i); // O(n) 연산
  }
});

performanceTest("연결 리스트 - 앞에 삽입", () => {
  let head = null;
  for (let i = 0; i < N; i++) {
    const newNode = { value: i, next: head };
    head = newNode; // O(1) 연산
  }
});

// 뒤에 삽입
performanceTest("배열 - 뒤에 삽입", () => {
  const arr = [];
  for (let i = 0; i < N; i++) {
    arr.push(i); // O(1) 연산 (대부분의 경우)
  }
});

performanceTest("연결 리스트 - 뒤에 삽입", () => {
  const queue = new LinkedListQueue();
  for (let i = 0; i < N; i++) {
    queue.enqueue(i); // O(1) 연산
  }
});

// 랜덤 접근
performanceTest("배열 - 랜덤 접근", () => {
  const arr = Array.from({ length: N }, (_, i) => i);
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    const randomIndex = Math.floor(Math.random() * N);
    sum += arr[randomIndex]; // O(1) 연산
  }
});

performanceTest("연결 리스트 - 순차 접근", () => {
  // 연결 리스트 생성
  let head = null;
  let tail = null;
  for (let i = 0; i < N; i++) {
    const newNode = { value: i, next: null };
    if (!head) {
      head = tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
  }
  
  // 1000번 순차 접근
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    let current = head;
    let count = 0;
    while (current && count < N) {
      sum += current.value;
      current = current.next;
      count++;
    }
  }
});

// 3. 메모리 사용량 비교
console.log("\n💾 메모리 사용량 비교");
console.log("=".repeat(40));

const memoryBefore = getMemoryUsage();

// 큰 배열 생성
console.log("🔸 배열 메모리 테스트:");
const bigArray = Array.from({ length: 100000 }, (_, i) => i);
const memoryAfterArray = getMemoryUsage();

if (memoryBefore !== null && memoryAfterArray !== null) {
  console.log(`배열 생성 후 메모리 증가: ${(memoryAfterArray - memoryBefore).toFixed(2)}MB`);
}

// 연결 리스트 생성 (동일한 크기)
console.log("\n🔸 연결 리스트 메모리 테스트:");
let linkedListHead = null;
let linkedListTail = null;

for (let i = 0; i < 100000; i++) {
  const newNode = { value: i, next: null };
  if (!linkedListHead) {
    linkedListHead = linkedListTail = newNode;
  } else {
    linkedListTail.next = newNode;
    linkedListTail = newNode;
  }
}

const memoryAfterLinkedList = getMemoryUsage();

if (memoryAfterArray !== null && memoryAfterLinkedList !== null) {
  console.log(`연결 리스트 추가 후 메모리 증가: ${(memoryAfterLinkedList - memoryAfterArray).toFixed(2)}MB`);
}

// 정리
console.log("\n" + "=".repeat(60));
console.log("📊 성능 비교 요약");
console.log("=".repeat(60));

console.log(`
✅ 연결 리스트가 유리한 경우:
   - 앞/중간 삽입/삭제가 빈번한 경우
   - 큐 구현 (특히 dequeue 연산)
   - 크기가 동적으로 변하는 경우
   - 순차 접근만 필요한 경우

✅ 배열이 유리한 경우:
   - 랜덤 접근이 빈번한 경우
   - 인덱스 기반 연산이 많은 경우
   - 메모리 사용량을 최소화해야 하는 경우
   - 캐시 지역성이 중요한 경우

🎯 결론:
   - 큐/스택 → 연결 리스트
   - 배열 인덱싱 → 배열
   - 동적 크기 → 연결 리스트
   - 메모리 효율성 → 배열
`);

// 실제 사용 사례 예제
console.log("\n🌟 실제 사용 사례 시뮬레이션");
console.log("=".repeat(40));

// 프린터 대기열 시뮬레이션
class PrintJob {
  constructor(id, pages) {
    this.id = id;
    this.pages = pages;
    this.timestamp = Date.now();
  }
}

class PrinterQueue {
  constructor() {
    this.queue = new LinkedListQueue();
  }
  
  addJob(id, pages) {
    const job = new PrintJob(id, pages);
    this.queue.enqueue(job);
    console.log(`📄 프린트 작업 추가: Job-${id} (${pages}페이지)`);
  }
  
  processJob() {
    const job = this.queue.dequeue();
    if (job) {
      const waitTime = Date.now() - job.timestamp;
      console.log(`🖨️  프린트 완료: Job-${job.id}, 대기시간: ${waitTime}ms`);
      return job;
    }
    console.log("📭 대기열이 비어있습니다");
    return null;
  }
  
  getQueueSize() {
    return this.queue.size;
  }
}

console.log("🖨️  프린터 대기열 시뮬레이션:");
const printer = new PrinterQueue();

// 작업 추가
printer.addJob(1, 5);
printer.addJob(2, 10);
printer.addJob(3, 3);

// 작업 처리
setTimeout(() => printer.processJob(), 100);
setTimeout(() => printer.processJob(), 200);
setTimeout(() => printer.processJob(), 300);
setTimeout(() => printer.processJob(), 400); // 빈 큐에서 처리 시도
