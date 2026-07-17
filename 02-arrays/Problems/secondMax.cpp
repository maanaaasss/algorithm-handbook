#include <iostream>
#include <vector>
#include <climits>
using namespace std;

int secondLargest(vector<int> &arr)
{
    int max = arr[0];
    int secMax = -1;

    for (int i = 1; i < arr.size(); i++) {   
        if (arr[i] > max) {
            secMax = max;
            max = arr[i];
        }
        else if (arr[i] < max && arr[i] > secMax) {
            secMax = arr[i];
        }
    }

    return secMax;
}

int main()
{
    vector<int> arr = {5,5,5,4};
    cout << secondLargest(arr);
    return 0;
}