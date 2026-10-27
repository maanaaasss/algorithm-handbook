#include<iostream>
using namespace std;

class Node {
    public:
        int data;
        Node* next;

        Node(int newData) {
            this->data = newData;
            this->next = nullptr;
        }
};

void traverseList(Node* head) {
    if(head == nullptr) {
        cout<<endl;
        return;
    }

    cout << head->data << " ";

    traverseList(head->next);
}

Node* insertAtFirst(Node* head, int key) {
    Node* newNode = new Node(key);
    newNode->next = head;
    head = newNode;

    return head;
}

int main() {
    Node* head = new Node(10);
    head->next = new Node(20);
    head->next->next = new Node(30);
    head->next->next->next = new Node(40);
    
    int key = 10;
    head = insertAtFirst(head, key);
    traverseList(head);
}