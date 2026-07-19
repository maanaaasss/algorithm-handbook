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

string pivotIndex(vector<int>& prefixSum, vector<int>& arr) {
    int totalSum = prefixSum[arr.size() - 1];

    for(int i=0; i<arr.size(); i++) {
        int leftSum = leftSum + arr[i];
        int rightSum = totalSum - leftSum - arr[i];

        if(leftSum == rightSum) {
            return "It's equal";
        }

    }
    return "Couldn't find anything";
}

int main() {
    vector<int> arr = {1, 7, 3, 6, 5, 6};
    vector<int> prefixSum = manualPrefixSum(arr);
    for(auto i:prefixSum) {
        cout << i << " ";
    }

    cout << endl;

    cout << pivotIndex(prefixSum, arr) << endl;

    return 0;
}