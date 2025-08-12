#include <iostream>
#include <vector>
using namespace std;

int main() {
    // 계수 정렬 배열
    vector<int> count(10001, 0);
    
    cout << "C++ 메모리 사용량 측정 중..." << endl;
    cout << "계수 배열 크기: " << count.size() * sizeof(int) << " bytes" << endl;
    
    return 0;
}
