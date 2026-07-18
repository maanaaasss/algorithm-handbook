#include<iostream>
#include<vector>
using namespace std;

vector<int> manualPrefixSum(vector<int>& arr) {
    vector<int> prefixSum(arr.size());
    prefixSum[0] = arr[0];

    for(int i=1; i<arr.size(); i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }
    return prefixSum;
}

int rangeSum(vector<int>& prefixSum, int L, int R) {
    if(L == 0) {
        return prefixSum[R];
    }
    return prefixSum[R] - prefixSum[L-1];
}

int main() {
    vector<int> arr = {4, 2, 7, 1, 5};
    vector<int> prefixSum = manualPrefixSum(arr);
    for(auto i:prefixSum) {
        cout << i << " ";
    }

    cout << endl;

    cout << rangeSum(prefixSum,0, 3) << endl;

    return 0;
}