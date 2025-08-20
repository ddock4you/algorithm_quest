import sys
import os
import psutil

def get_memory_usage():
    process = psutil.Process(os.getpid())
    return process.memory_info().rss

print("Python 기본 런타임 메모리:", get_memory_usage() / 1024 / 1024, "MB")

# 계수 정렬 배열 생성
count = [0] * 10001
print("계수 배열 생성 후 메모리:", get_memory_usage() / 1024 / 1024, "MB")
print("계수 배열 크기:", sys.getsizeof(count), "bytes")
