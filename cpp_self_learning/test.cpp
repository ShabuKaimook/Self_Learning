#include <iostream>
using namespace std;

string triangle(int n){
    string result = "*\n";
    int round = n - 2;
    for (int i = 1; i <= round; i++){
        result += "*";
        int dot = (2 * i) - 1;
        for (int j = 0; j < dot; j++){
            result += ".";
        }
        result += "*\n";
    }

    for (int i = 1; i <= n; i++){
        result += "* ";
    }
    
    return result + "\n";
}


int main(){
    cout << triangle(7);
}