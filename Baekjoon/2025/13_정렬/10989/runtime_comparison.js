// 런타임 구성요소 비교 분석
console.log("=== 런타임 구성요소 비교 ===\n");

// Node.js 런타임 구성요소
console.log("🟢 Node.js 런타임 구성:");
console.log("├── V8 JavaScript 엔진 (JVM과 유사한 역할)");
console.log("├── libuv (이벤트 루프, I/O 처리)");
console.log("├── 내장 모듈들 (fs, http, crypto 등)");
console.log("├── 가비지 컬렉터");
console.log("└── JIT 컴파일러\n");

// Java 런타임 구성요소
console.log("☕ Java 런타임 구성:");
console.log("├── JVM (Java Virtual Machine)");
console.log("│   ├── JIT 컴파일러");
console.log("│   ├── 가비지 컬렉터");
console.log("│   └── 클래스 로더");
console.log("├── 표준 라이브러리 (java.util, java.io 등)");
console.log("└── 운영체제 어댑터\n");

// 메모리 사용량 실측
const beforeMemory = process.memoryUsage();
console.log("📊 현재 Node.js 메모리 사용량:");
console.log(`RSS: ${(beforeMemory.rss / 1024 / 1024).toFixed(2)} MB`);
console.log(`Heap: ${(beforeMemory.heapUsed / 1024 / 1024).toFixed(2)} MB`);

// 간단한 작업 후 메모리 변화
const arr = new Array(10000).fill(0);
const afterMemory = process.memoryUsage();
console.log("\n📈 배열 생성 후 메모리 변화:");
console.log(`추가 사용: ${((afterMemory.rss - beforeMemory.rss) / 1024).toFixed(2)} KB`);
