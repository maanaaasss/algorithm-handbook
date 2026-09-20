#include<iostream>
using namespace std;

class BankAccount {
    private:
        int accountNumber;
        string holderName;
        int balance;

    public:
        BankAccount(int accountNumber, string holderName) {
            this->accountNumber = accountNumber;
            this->holderName = holderName;
            this->balance = 0;
        }

        void deposit(int depositAmount) {
            if(depositAmount <= 0) {
                cout << "Invalid amount" <<endl;
            } else {
                balance += depositAmount;
                cout << depositAmount << " Added successfully\n";
            }
        }

        void withdraw(int withdrawAmount) {
            if(withdrawAmount <= 0) {
                cout<<"Invalid amount";
            } else if(withdrawAmount > balance) {
                cout << "You don't have enough balance\n" <<endl;
            } else {
                balance -= withdrawAmount;
                cout<<withdrawAmount << " withdraw successfull\n";
            }
        }

        void displayBalance() {
            cout << "Your current balance is " <<balance <<endl;
        }

        void displayAccountInfo() {
            cout << "Account Number: " << accountNumber << endl;
            cout << "Account Name: " << holderName <<endl;
            cout << "Balance: " <<balance<<endl;
        }
};

int main() {

    BankAccount myAccount(123, "Manas");
    
    myAccount.deposit(2000);    
    myAccount.deposit(-500);    

    myAccount.withdraw(500);    
    myAccount.withdraw(5000);   
    myAccount.withdraw(-100);  

}