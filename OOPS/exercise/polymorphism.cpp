
/*
    Runtime Polymorphism
        making the base class function as virutal the compiler decides
        which method to call based on the object.

        Without virtual it will always call the base class function even
        if we pass in the reference of another class's object.

        virtual
            ↓
    Enables runtime polymorphism

        override
            ↓
    Tells compiler:
    "I am intentionally overriding the base function."
*/

#include<iostream>
using namespace std;

class Animal {
    public:
        virtual void makeSound() {
            cout << "Animal Sound" <<endl;
        };

        virtual ~Animal() {
            cout << "Animal Destructor" <<endl;
        }
};

class Dog : public Animal {
    public: 
        void makeSound() override {
            cout << "Woof!" <<endl;
        }

        ~Dog() {
            cout << "Dod Destructor" <<endl;
        }
};

class Cat : public Animal {
    public:
        void makeSound() override {
            cout << "Meow!" << endl;
        }

        ~Cat() {
            cout << "Cat Destructor" <<endl;
        }
};

int main() {
    Animal* animal  = new Dog();

    animal->makeSound();

    delete animal;
}