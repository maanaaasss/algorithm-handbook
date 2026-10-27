#include<iostream>
using namespace std;

int longestConsecutive(vector<int>& nums) {
    
}

int main() {
    int tt;
    cin >> tt;
    while(tt--) {
        vector<int> nums;
        int n;
        cin >> n;
        for(int i = 0; i < n; i++) {
            cin >> nums[i];
        }

        cout << longestConsecutive(nums) << endl;
    }
}