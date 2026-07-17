#include<iostream>
using namespace std;

int largestElement(vector<int>& arr) {

    if(arr.empty()) {
        throw invalid_argument("Array is emppty");
    }
    int maxsofar = arr[0];
    
    for(int i=1; i<arr.size(); i++) {
        if(arr[i] > maxsofar) {
            maxsofar = arr[i];
        }
    }

    return maxsofar;
}

int main() {
    vector<int> arr = {1, 1, 1, 1};
    cout << largestElement(arr);
    return 0;
}