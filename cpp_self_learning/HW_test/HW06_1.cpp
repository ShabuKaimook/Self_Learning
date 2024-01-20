#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

string uniform(string line){
    int count_l = 0, count_u = 0;

    for (char w : line){
        if (islower(w)){
            count_l += 1;
        } else if (isupper(w)){
            count_u += 1;
        }
    }

    string result = "";
    if ((count_l > count_u) || ((count_l = count_u) and islower(line[0]))){
        for (char w : line){
            result += tolower(w);
        }
    }else{
        for (char w : line){
            result += toupper(w);
        }
    }
    
    return result;
}



int main(){
    cout << uniform("HaPpY") << endl;
    cout << uniform("cOdINg") << endl;
    cout << uniform("coMP scI!!!") << endl;
    return 0;
}
