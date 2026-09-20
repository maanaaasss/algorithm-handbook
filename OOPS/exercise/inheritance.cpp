#include<iostream>
using namespace std;

class Person {
    protected:
        string name;
        int age;
    public:
        Person(string name, int age) {
            this->name = name;
            this->age = age;
        } 

        void displayPersonInfo() {
            cout << "Name: " << name << endl;
            cout << "Age: " << age << endl;
        }
};

class Student : public Person { 
    public:
        int rollNumber;

        Student(string name, int age, int rollNumber) : Person(name, age){
            this->rollNumber = rollNumber;
        }
        void study() {
            cout <<this->name << " is studying!"<<endl;
        }

        void displayStudentInfo() {
            cout << "Name: " << this->name << endl;
            cout << "Age: " << this->age << endl;
            cout << "Roll Number: "<<this->rollNumber<<endl;
        }

};


int main() {
    Student manas("Manas", 21, 23520005);
    manas.displayPersonInfo();
    manas.displayStudentInfo();
    manas.study();

}