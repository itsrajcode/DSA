// Data types
/*
int - 4 bytes
float - 4 bytes
double - 8 bytes
char - 1 byte

int  = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
float = 1.0f, 2.0f, 3.0f, 4.0f, 5.0f
double = 1.0, 2.0, 3.0, 4.0, 5.0
char = 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'

primitive data types
- int
- float
- double
- char

non-primitive data types
- string
- array
- vector
- map
- set
- unordered_set
- unordered_map

Derived data types
- pointer
- reference
- class
- struct
- enum
- union
- typedef
- template

User defined data types
- string
- array
- vector
- map
- set
- unordered_set
- unordered_map

*/

// #include <iostream>
// #include <string>

// using namespace std;

// int main() {

//     int teaLeaves = 50;
//     float temprature = 80.5;
//     double price = 10.99;
//     char teaGrading = 'A';
//     bool isAvailable = true;
//     string name = "LemonTea \n";
//     string description = "A \"refreshing\" lemon tea";

//     cout << name << description <<endl;
//     cout << description <<endl;

//     cout << teaGrading <<endl;
//     cout << teaLeaves <<endl;
//     cout << temprature <<endl;
//     cout << price <<endl;
//     cout << isAvailable <<endl;


//     return 0;
// }

#include <iostream>
#include <string>

using namespace std;

int main() {
    string userTea;
    int teaQuantity;

    cout << "Enter the name of the tea: ";
    getline(cin, userTea);
    cout << "Enter the quantity of the tea: ";
    cin >> teaQuantity;
    cout << "You have ordered " << userTea << " with quantity of " << teaQuantity <<endl;

    return 0;
}