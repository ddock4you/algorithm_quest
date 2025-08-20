# 런타임 오버헤드 상세 분석

## Node.js 런타임 오버헤드 (29MB)

### 🎯 실제 필요한 작업: 계수 정렬 (0.08MB)

```javascript
const count = new Array(10001).fill(0); // 실제 작업용 메모리
```

### 💸 런타임 오버헤드 (28.92MB)

1. **V8 JavaScript 엔진** (15-20MB)

   - JIT 컴파일러 코드
   - 최적화된 기계어 캐시
   - 가비지 컬렉터 공간

2. **libuv 이벤트 루프** (2-3MB)

   - 비동기 I/O 처리
   - 스레드 풀
   - 이벤트 큐

3. **내장 모듈들** (5-8MB)

   - fs, path, util, crypto 등
   - 웹 서버 관련 기능들
   - 네트워크 스택

4. **런타임 라이브러리** (3-5MB)
   - JavaScript 표준 라이브러리
   - Node.js API 구현

## 다른 언어들과 비교

### C++ 런타임 오버헤드 (0.5MB)

```cpp
vector<int> count(10001, 0);  // 실제 작업: 0.04MB
// 런타임 오버헤드: 0.46MB (iostream, 기본 라이브러리)
```

### Python 런타임 오버헤드 (8-12MB)

```python
count = [0] * 10001  # 실제 작업: 0.25MB
# 런타임 오버헤드: 7.75-11.75MB (CPython 인터프리터)
```

### Java 런타임 오버헤드 (25MB+)

```java
int[] count = new int[10001];  // 실제 작업: 0.04MB
// 런타임 오버헤드: 24.96MB+ (JVM)
```
