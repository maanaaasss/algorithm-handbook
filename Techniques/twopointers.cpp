// longest subarray with sum <= k

#include<iostream>
using namespace std;

int solve(vector<int> nums, int k) {
    int maxLen = 0;
    for(int i=0; i<nums.size()-1; i++) {
        int sum = 0;
        for(int j= i; j<nums.size()-1; j++) {
            sum += nums[i];
            if(sum <= k) {
                maxLen = max(maxLen, j - i + 1);
            } else if(sum > k) break;
        }
    }
    return maxLen;
}

int main() {
    vector<int> nums = {2, 5, 1, 7, 10};
    int k = 14;

    cout << solve(nums, k) << endl;

}