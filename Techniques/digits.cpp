#include<iostream>
using namespace std;

bool sol(int n) {
    int sum = 0;
    int prod = 0;
    while(n>0) {
        int digit = n%10;
        n/=10;
        sum += digit;
        prod *= digit;
    }

    if(sum+prod == n) {
        return true;
    } else {
        return false;
    }
    return false;
}

int main() {
    int n;
    cin >> n;
    cout << sol(n) << endl;
    return 0;   
}