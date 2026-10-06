#include<iostream>
#include<vector>
#include<queue>
#include<functional>
using namespace std;

struct Compare {
    bool operator()(const pair<int, int>& a, const pair<int, int>& b) {
        return a.second > b.second;
    }
};

int main() {
    priority_queue<pair<int, int>, vector<pair<int, int>>, Compare> pq;

    pq.push(make_pair(10, 100));
    pq.push(make_pair(20, 200));
    cout << pq.top().second << "\n";
    pq.pop();
    pq.push(make_pair(30, 300));
    cout << pq.top().second;


}