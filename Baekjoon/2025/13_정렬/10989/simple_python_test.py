import sys

print("Python 기본 정보:")
print("- 버전:", sys.version.split()[0])

# 계수 정렬 배열
count = [0] * 10001
print("- 계수 배열 크기:", sys.getsizeof(count), "bytes =", sys.getsizeof(count) / 1024, "KB")

# 간단한 메모리 추정
print("- 예상 정수 크기:", sys.getsizeof(0), "bytes per integer")
print("- Python 리스트 오버헤드:", sys.getsizeof([]), "bytes")
